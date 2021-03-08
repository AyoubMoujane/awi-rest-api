echo "Starting to deploy docker image.."
DOCKER_IMAGE=ayoubmoujane/awi-rest-api
docker pull $DOCKER_IMAGE
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker run -d -p 8080:8080 $DOCKER_IMAGE