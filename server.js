// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

// HTTP request logger
app.use(morgan('tiny'));

app.get('', (req, res) => {
    const data = {
        userName: 'Richard',
        age: 32
    };
    res.json(data);
});