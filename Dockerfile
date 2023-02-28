FROM node:alpine
LABEL author="Ben Lantaff"

# Working directory
WORKDIR /app

# Copy local files to your docker container
COPY . .

# Install any dependencies (.dockerignore file will not copy over the node_modules folder)
RUN npm install

# When the container gets started, this command will execute first.
ENTRYPOINT [ "node","server.js" ]
