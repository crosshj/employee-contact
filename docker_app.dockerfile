FROM docker_base.dockerfile

ENV APP_REPO https://github.com/crosshj/employee-contact.git
ENV SOLUTION_DIR /root/employee-contact/solution

RUN echo "cache bust5" && cd /root && git clone "${APP_REPO}"

RUN npm --prefix ${SOLUTION_DIR} install
#RUN npm --prefix ${SOLUTION_DIR} run build:dev

EXPOSE 8080

CMD ["sh", "-c", "npm --prefix ${SOLUTION_DIR} start"]

