# TeamViewer Device Management Web Application

This Node.js application allows you to view and search for TeamViewer devices, specifically Australia Post Parcel Lockers. It sorts devices by their connection status and allows for filtering by device alias.

## Features

- View all devices with their connection status
- Sort devices with offline ones at the top
- Search for devices by alias

## Setup


1. Clone the repository:

 ```bash
   git clone https://github.com/your-username/Teamviewer-Device-List.git
   cd Teamviewer-Device-List
   ```
   
2. Install dependencies:

```
npm install
```

3. Create a .env file in the root directory with the following content:

```
API_TOKEN=your_teamviewer_api_token
```

4. Start the application:

```
node server.js
```
The application will be available at http://localhost:3000.

# Deployment
For deployment, we recommend using Docker. Here’s a basic Docker setup:

1. Create a Dockerfile in the root directory with the following content:
```
# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

```
2. Build and run the Docker container:

```
docker build -t teamviewer-app .
docker run -p 3000:3000 --env-file .env teamviewer-app
```

# Security
- The API token used has read-only permissions to ensure that no changes can be made to the TeamViewer settings.
- The application can be outward-facing and accessed by technical staff.

# Customization
The application can be modified to better suit your specific needs. If you have any requests for changes or additional features, please let us know.

# License
This project is licensed under the MIT License - see the LICENSE file for details.