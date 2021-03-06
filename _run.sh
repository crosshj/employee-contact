#!/bin/sh

docker stop some-mongo
docker stop some-app
docker rm some-mongo
docker rm some-app
docker run --name some-mongo -d mongo
docker run --name some-app -it -p 0.0.0.0:80:80 --link some-mongo:mongo docker_app.dockerfile