// IT 3203 milestone #2
// File: server.js
// Programmer: Matthew A. Ricco
// Date: 04/14/2024

// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse url-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route for serving the contact form
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// POST route to handle form submissions
app.post('/submit-form', (req, res) => {
    // Extract form data from the request body
    const { name, email, message } = req.body;

    // Perform validation (e.g., check if fields are not empty)
    if (!name || !email || !message) {
        return res.status(400).send('Please provide all required fields.');
    }

    // Process the form data (for demonstration, I'll log the data)
    console.log('Received form data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Send a response back to the client
    res.send(`Received your message: ${message}`);
});

// Route for serving the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/IntroToWebDesignProject.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
