#!/bin/bash

# Update npm
echo "Installing npm to the latest version"
npm install -g npm@9.8.0

echo "Installing dependencies for the app"
# Install nodejs dependencies
npm install

if [ "$NODE_ENV" == "production" ]; then
    echo "Creating app build for production"
    npm run build

    echo "Starting project in production mode"
    node dist/server.js 
else
    echo "Starting project in development mode"
    npm run start
fi
