# NodeJS-Express-Docker

This is a minimal application to get started with NodeJS, Express, and Docker.

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `server.js` - The nodejs server which serves up the application.
- `app.js` - Main express app.
- `index.ejs` - Web page that is displayed at [http://localhost:9001](http://localhost:9001)
- `Dockerfile` - The file used to create the docker image.
- `docker-compose.yml` - Compose file allows you to bring up a container using the docker image.

# Getting started

These steps assume you have docker installed on your machine. If you need to install, please visit [Docker](https://docker.com/)

- `git clone https://github.com/benlantaff/NodeJS-Express-Docker.git` - Clone this repo to your local machine.
- `docker build -t benlantaff/nodejs-express .` - Build the docker image. Make sure you are in the same directory as the Dockerfile.
- `docker-compose up` - Docker command to run the image in a container.

## Learning Resrouces

- [Node.js v18.2.0 documentation](https://nodejs.org/dist/latest-v18.x/docs/api/) - all of Node.js's documentation
- [Express.js](https://expressjs.com/) - official express.js site
- [Docker Docs](https://docs.docker.com/) - guides, manuals, getting started basics
- [Bootstrap ](https://getbootstrap.com/) - official bootstrap site w/ loads of documentation and examples
