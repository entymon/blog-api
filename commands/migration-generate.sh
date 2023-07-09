#!/bin/bash

MIGRATION_NAME=
while getopts 'n:,' opt; do
    case $opt in
        n) MIGRATION_NAME=$OPTARG;;
    esac
done

if [ -z "$MIGRATION_NAME" ]; then
    echo "option n was NOT given, exit."
    exit 1;
fi

API_CONTAINER_ID=$(docker ps -aqf "name=api")
docker exec --user node --workdir /usr/src/api/ $API_CONTAINER_ID node \
  --require ts-node/register ./node_modules/typeorm/cli.js \
  -- -d ./config/typeOrm.config.docker.ts migration:generate ./migrations/$MIGRATION_NAME