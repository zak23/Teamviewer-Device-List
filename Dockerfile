# Use the official Node.js image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Add the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in package.json
RUN npm install

# Bundle and serve your app with npm start
CMD ["npm", "start"]