Yeah, the problem is not the existing images on your host, but it stems from the volume (or bind mount directory) being already initialized after your first start. The postgres user, and database creation only happens on the first start (ie, /var/lib/postgresql/data must not already contain database files).

Here is an example flow

1. declare volume for my image via compose: ./data/postgres:/var/lib/postgresql/data
2. set env in yaml: POSTGRES_PASSWORD=test
3. start containers docker-compose up -d
4. decide to add database to postgres env POSTGRES_DB=test_db or change the password
5. restart my containers docker-compose up -d
6. database test_db does not exist or password is unchanged 😢
7. db files must be removed in order for postres entrypoint to re-initialize: docker-compose stop; sudo rm -rf ./data/postgres/
8. now it can be restarted docker-compose up -d 😃

If you do not declare a volume mount point, then the VOLUME declared in the postgres image will apply and docker will create and manage the directory independent of the life-cycle of the container. This gets more complicated when using compose, since it will keep the volume to re-use later even when you docker-compose rm -f all of your running containers.

An example without a bind mounted volume:

say we do steps 2-5 above
we still have the same problem of the test_db database not existing (or the password not changing) since the data from the volume still exists 😞
so, get rid of all containers and their volumes docker-compose rm -fv
or docker-compose rm -fv postgres to get rid of just the postres service and its volumes
now we can start up a new postgres container with a new empty volume docker-compose up -d 😃
You can see what volumes you have on your host by doing a docker volume ls (bind mounts will not show up in this list). There is currently no easy way to see what containers are attached to a volume, so you would have to docker inspect the container to see which ones are attached to it.

If you want to clean up all local volumes that are not attached to containers (WARNING this could delete important data 😲): docker volume ls | awk '$1 == "local" { print $2 }' | xargs --no-run-if-empty docker volume rm. On my development machine I usually precede this by removing stopped containers.

Also, in case it is not obvious, do not delete your postres data directory or volume if you have important data stored there. 😱