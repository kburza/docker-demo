FROM node:19-alpine

# Docker support Linux commands (alpine)
# Copies contents of this project into a VM /app directory
COPY package.json /app/
COPY src /app/

# Sets working directory for following commands
# /app is now the default location to run code
WORKDIR /app

# Install all node dependencies (Outlined in package.json)
RUN npm install

# Starts application
CMD ["node", "server.js"]