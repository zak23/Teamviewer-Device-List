#!/bin/bash

# Define the custom container name
custom_container_name="teamviewer-devices"

# Check if a container with the specified name is running
if [ "$(docker ps -q -f name=$custom_container_name)" ]; then
    # Stop and remove the container if it's running
    echo "Stopping and removing existing container with name $custom_container_name..."
    docker stop $custom_container_name
    docker rm $custom_container_name
fi

# Pull changes from Git
git pull

# Build Docker image with no cache
docker build --no-cache -t teamviewer-devices .

# Run Docker container with custom name, volume, port mapping, and restart policy
docker run --name $custom_container_name -d \
    -p 1235:1235 \
    --restart unless-stopped \
    teamviewer-devices