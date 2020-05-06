#!/bin/sh
IMAGE_NAME="ayakoohara/front-end"
IMAGE_TAG=$(git rev-parse --short HEAD)

echo "Front-end building docker image ${IMAGE_NAME}:${IMAGE_TAG}"
docker build -t "${IMAGE_NAME}:${IMAGE_TAG}" .
docker tag "${IMAGE_NAME}:${IMAGE_TAG}" "${IMAGE_NAME}:latest"

echo "authenticate and push image to DockerHub"
echo "${DOCKER_PASS}" | docker login -u "${DOCKER_USERNAME}" --password-stdin
docker push "${IMAGE_NAME}:${IMAGE_TAG}"
docker push "${IMAGE_NAME}:latest"