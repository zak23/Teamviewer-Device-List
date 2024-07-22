const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();  // Load environment variables from .env file

const app = express();
const port = 3000;

// Get API token from environment variables
const apiToken = process.env.API_TOKEN;
const headers = { 'Authorization': `Bearer ${apiToken}` };

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to fetch all devices
app.get('/api/devices', async (req, res) => {
    let devices = [];
    let nextPageToken = null;

    try {
        do {
            const response = await axios.get('https://webapi.teamviewer.com/api/v1/devices', {
                headers,
                params: { page_token: nextPageToken },
            });

            devices = devices.concat(response.data.devices);
            nextPageToken = response.data.next_page_token;
        } while (nextPageToken);

        // Sort devices: offline devices first
        devices.sort((a, b) => (a.online_state === 'Offline' && b.online_state === 'Online' ? -1 : 1));

        res.json(devices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
