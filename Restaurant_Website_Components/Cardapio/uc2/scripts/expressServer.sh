#! /bin/bash
SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
docker run \
-it \
--name express \
--rm \
-d \
-h node.js \
-w /node \
-v ${SCRIPTPATH}/../:/node/ \
--publish 3000:3000 \
--net=ea202 \
--workdir /node/api/ \
node

docker exec express node ../scripts/initDB.js
docker exec -d express npm start