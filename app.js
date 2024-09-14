// app.js

const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/main'); // Import the main routes
const PORT = 38283; // Port for local hosting

const app = express();

// Set the view engine to HTML using ejs
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); // Allow rendering HTML files with EJS engine
app.set('view engine', 'html');

// Set up static files folder
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes
app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});