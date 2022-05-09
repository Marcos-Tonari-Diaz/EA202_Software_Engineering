#! /bin/bash
SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
docker run \
-it \
--name vueServer \
--rm \
-d \
-h node.js \
-w /node \
-v ${SCRIPTPATH}/../:/node/ \
--publish 8080:8080 \
--net=ea202 \
node

docker exec vueServer npm run serve