# TeamViewer Device Management Web Application

This Node.js application allows you to view and search for TeamViewer devices, specifically Australia Post Parcel Lockers. It sorts devices by their connection status and allows for filtering by device alias.

## Features

- View all devices with their connection status
- Sort devices with offline ones at the top
- Search for devices by alias

## Setup


1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory with the following content:

env
Copy code
API_TOKEN=your_teamviewer_api_token
Start the application:

bash
Copy code
node server.js
The application will be available at http://localhost:3000.