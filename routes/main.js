// routes/main.js

const express = require('express');
const router = express.Router();

// Redirect '/' to '/home'
router.get('/', (req, res) => {
    res.redirect('/home');
});

// Home route
router.get('/home', (req, res) => {
    res.render('index', { title: 'kkronggswebsite', activePage: 'home' });
});

// About route
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', activePage: 'about' });
});

module.exports = router; // Export the routes
