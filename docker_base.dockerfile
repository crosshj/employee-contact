FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y git nano wget openssh-client git-core python
RUN apt-get install -y make build-essential g++

RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
ENV NVM_DIR=/root/.nvm
ENV SHIPPABLE_NODE_VERSION=v4.2.2
RUN . $HOME/.nvm/nvm.sh &&\
    nvm install $SHIPPABLE_NODE_VERSION &&\
    nvm alias default $SHIPPABLE_NODE_VERSION &&\
    nvm use default

RUN mkdir -p /root/.ssh && chmod 0700 /root/.ssh && \
    ssh-keyscan github.com >/root/.ssh/known_hosts
