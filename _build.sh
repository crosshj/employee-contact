#!/bin/sh

docker build -f ./docker_base.dockerfile -t docker_base.dockerfile .
docker build -f ./docker_app.dockerfile -t docker_app.dockerfile .
