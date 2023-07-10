#!/bin/bash

API_CONTAINER_ID=$(docker ps -aqf "name=api")
docker exec --user node --workdir /usr/src/api/ $API_CONTAINER_ID node \
  --require ./node_modules/ts-node/register ./node_modules/typeorm/cli.js migration:run \
  -- -d ./config/typeOrm.config.docker.ts