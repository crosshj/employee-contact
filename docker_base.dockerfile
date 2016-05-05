FROM ubuntu:14.04

# consider using https://hub.docker.com/_/node/ instead

# some issues installing per mongo website
# used http://serverfault.com/questions/746348/mongodb-install-fails-in-ubuntu-14-04-docker-container
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 &&\
    echo "deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list

RUN apt-get update
RUN apt-get install -y git nano wget openssh-client git-core python
RUN apt-get install -y make build-essential g++ libkrb5-dev

RUN wget -qO- https://deb.nodesource.com/setup_5.x | bash &&\
    apt-get install -y nodejs

RUN apt-get install -y mongodb-org-shell


