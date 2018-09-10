## Base Docker image

To start our Node.js environment, we’ll to first decide which Node.js version to use. Take a look at the [official Node.js Docker image repository](https://hub.docker.com/_/node) for a list of currently supported images. I’ll use `node:8.11.4-alpine` for the remainder of this post. You’re free to use whichever image you need/desire, I tend to choose alpine images for their reduced size.

## Create a package.json file

If you don’t already have one, create a package.json file.

You can do this in Docker:

```bash
# This will use the node:8.11.4-alpine image to run `npm init`
# with the current directory mounted into the container.
#
# Follow the prompts to create your package.json
docker run --init --rm -it -v "${PWD}:/src" -w /src node:8.11.4-alpine npm init
```

## Setup dev image

Create a `Dockerfile` and put the following in it (remember to replace your node image name):

```dockerfile
FROM node:8.11.4-alpine AS dev
WORKDIR /usr/src/app
ENV NODE_ENV development
COPY . .
# You could use `yarn install` if you prefer.
RUN npm install
```

This build step will serve as our development image. We can build it with:

```bash
# Replace YOUR-NAMESPACE/YOUR-IMAGE with the name you would like to use.
docker build -t YOUR-NAMESPACE/YOUR-IMAGE:dev --target dev .
```

### Using the dev image

Now that you have a dev image, use it to run containers:

```bash
# The `YOUR COMMAND` portion can be replaced with whatever command you
# would like to use in your container.
docker run --rm -it --init -v "${PWD}:/usr/src/app" YOUR-NAMESPACE/YOUR-IMAGE:dev YOUR COMMAND

# Run a server.js file with node:
docker run --rm -it --init -v "${PWD}:/usr/src/app" YOUR-NAMESPACE/YOUR-IMAGE:dev node server.js

# Install a dev package with npm:
docker run --rm -it --init -v "${PWD}:/usr/src/app" YOUR-NAMESPACE/YOUR-IMAGE:dev npm install --save-dev webpack

# Install a production package with npm:
docker run --rm -it --init -v "${PWD}:/usr/src/app" YOUR-NAMESPACE/YOUR-IMAGE:dev npm install --save express

# Install a package with yarn:
docker run --rm -it --init -v "${PWD}:/usr/src/app" YOUR-NAMESPACE/YOUR-IMAGE:dev yarn add express
```

### Listening for changes

Since Node.js is a long running process, it can be annoying to repeatedly SIGINT (ctrl-c) the process and re-run it to see your changes. We can use a program like [Nodemon](https://nodemon.io/) to automatically restart the process for us.

Install Nodemon as a dev dependency with a container:

```bash
docker run --rm -it --init -v "${PWD}:/usr/src/app" \
YOUR-NAMESPACE/YOUR-IMAGE:dev \
npm install --save-dev nodemon
```

Now run your application with `nodemon` (instead of `node`):

```bash
docker run --rm -it --init -v "${PWD}:/usr/src/app" \
YOUR-NAMESPACE/YOUR-IMAGE:dev \
nodemon server.js
```

### Opening ports

Node is often used as a web server (or other network connected application). If our server.js file were to listen to port 3000, we would need to bind a port on the host to the container’s application port with the `-p HOST_PORT:CONTAINER_PORT` syntax in our run command.

Example, pointing host port 3000 to container port 3000:

```bash
docker run --rm -it --init -v "${PWD}:/usr/src/app" \
-p 3000:3000 \
YOUR-NAMESPACE/YOUR-IMAGE:dev \
nodemon server.js
```

### Enable debugging

Node’s debugger works over the port 9229 by default. To enable use of the debugger (in our IDE, Chrome debugger tools, or another method), we must bind to that port as well.

To demonstrate binding a different host port to the container port, we’ll set the container’s debugger to listen on port 3001 but bind the host port to 9229. This will allow our debug tools to auto-detect the server (if they support it).

```bash
docker run --rm -it --init -v "${PWD}:/usr/src/app" \
-p 3000:3000 \
-p 9229:3001 \
YOUR-NAMESPACE/YOUR-IMAGE:dev \
node --inspect=0.0.0.0:3001 server.js
```

*Note, we have to set the IP to 0.0.0.0 for Node to allow the connection, since our host has a different IP than the container.*

We can debug with Nodemon as well!

```bash
docker run --rm -it --init -v "${PWD}:/usr/src/app" \
-p 3000:3000 \
-p 9229:3001 \
YOUR-NAMESPACE/YOUR-IMAGE:dev \
nodemon --inspect=0.0.0.0:3001 server.js
```

## Support dev vs production dependencies

By making use of [a multi-stage build](https://docs.docker.com/develop/develop-images/multistage-build/), we can prevent dev dependencies from making their way into the production environment—while still having a production like dev image. We’re going to add an extra `FROM` command to do so:

```dockerfile
FROM node:8.11.4-alpine AS dev
WORKDIR /usr/src/app
ENV NODE_ENV development
COPY . .
# You could use `yarn install` if you prefer.
RUN npm install

FROM node:8.11.4-alpine AS runtime
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY . .
# You could use `yarn install` if you prefer.
RUN npm install
# Instead of server.js specify whatever you application run command is.
# Use exec form, see https://docs.docker.com/engine/reference/builder/#cmd
CMD ["node","server.js"]
```

Your production image can now be built by dropping the target argument:

```bash
# Replace YOUR-NAMESPACE/YOUR-IMAGE with the name you would like to use.
docker build -t YOUR-NAMESPACE/YOUR-IMAGE:latest .
```

This production image can now be deployed to a server with Docker, a Kubernetes cluster, a serverless platform, or anywhere else containers are accepted.