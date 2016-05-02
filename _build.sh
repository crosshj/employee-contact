#!/bin/sh

docker build -f ./docker_base -t docker_base.dockerfile .
docker build -f ./docker_app -t docker_app.dockerfile .
