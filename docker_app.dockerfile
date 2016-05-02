FROM docker_base

ENV APP_REPO git@github.com:crosshj/employee-contact.git

RUN echo "Host github.com\n\tStrictHostKeyChecking no\n" >> /root/.ssh/config &&\
    cd /root &&\
    git clone "${APP_REPO}" &&\

CMD ["/bin/bash"]
