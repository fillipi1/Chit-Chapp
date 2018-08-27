FROM impekable/nodejs:8

MAINTAINER James Zimmerman II <james@impekable.com>

COPY . /workspace
WORKDIR /workspace

RUN npm install

EXPOSE 8080

CMD ["node start"]
