FROM docker_base

ENV APP_REPO https://github.com/crosshj/employee-contact.git

RUN cd /root &&\
    git clone "${APP_REPO}"

CMD ["/bin/bash"]
