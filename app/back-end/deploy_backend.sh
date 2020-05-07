#!/bin/sh
IMAGE_NAME="ayakoohara/deploy_back-end"
IMAGE_TAG=$(git rev-parse --short HEAD)

echo "Back-end building docker image ${IMAGE_NAME}:${IMAGE_TAG}"
docker build -t "${IMAGE_NAME}:${IMAGE_TAG}" .
docker tag "${IMAGE_NAME}:${IMAGE_TAG}" "${IMAGE_NAME}:latest"

echo "Back-end authenticate and push image to Docker Hub"
echo "${DOCKER_PASS}" | docker login -u "${DOCKER_USERNAME}" --password-stdin
docker push "${IMAGE_NAME}:${IMAGE_TAG}"
docker push "${IMAGE_NAME}:latest"

echo "${SSH_KEY}" | base64 -d > ssh_key
chmod 600 ssh_key

echo "${SERVER_PUBLIC_KEY}" | base64 -d >> ~/.ssh/known_hosts

cat ~/.ssh/known_hosts

echo "Deploy with remote SSH"
ssh -i ssh_key "root@${SERVER_IP}" \
"docker pull ${IMAGE_NAME}:${IMAGE_TAG} && docker stop live-container && docker rm live-container && docker run --init -d --name live-container -p 9000:9000 ${IMAGE_NAME}:${IMAGE_TAG} && docker system prune -af"

echo "deployment success"