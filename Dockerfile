FROM node:16.13.0-buster-slim AS build

RUN apt-get update  && \
    apt-get install -y \
        apt-utils \
        python \
        g++ \
        make \
        gcc

FROM build AS install
ARG git_hash
ARG node_env
ARG version
ENV GIT_HASH=${git_hash}
ENV NODE_ENV=${node_env}
ENV VERSION=${version}

COPY ./package* /app/
WORKDIR /app
RUN npm ci --save-dev --production=false
COPY . ./

RUN npx webpack --config webpack.config.js && \
    rm -rf node_modules

FROM node:16.13.0-buster-slim

ENV TINI_VERSION v0.19.0

COPY ./package* /app/
WORKDIR /app
RUN npm ci --production || npm ci --production
COPY . ./
COPY --from=install /app/dist/public/js/main.js /app/dist/public/js/
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "-s", "--"]
EXPOSE 5033
USER node
CMD ["npm", "run", "start"]
