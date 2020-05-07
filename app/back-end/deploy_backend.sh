#!/bin/sh
IMAGE_NAME="ayakoohara/back-end"
IMAGE_TAG=$(git rev-parse --short HEAD)

echo "Back-end building docker image ${IMAGE_NAME}:${IMAGE_TAG}"
docker build -t "${IMAGE_NAME}:${IMAGE_TAG}" .
docker tag "${IMAGE_NAME}:${IMAGE_TAG}" "${IMAGE_NAME}:latest"

echo "Back-end authenticate and push image to Docker Hub"
echo "${DOCKER_PASS}" | docker login -u "${DOCKER_USERNAME}" --password-stdin
docker push "${IMAGE_NAME}:${IMAGE_TAG}"
docker push "${IMAGE_NAME}:latest"