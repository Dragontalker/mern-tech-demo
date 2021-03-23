// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern_template';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('==> 🌱  MongoDB is connected.');
});

// Schema
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// Saving data to our mongo database
const data = {
    title: 'Testing 1',
    body: 'This is the first data entry of testing database.'
};

// New instace of the model
const newBlogBost = new BlogPost(data);

// .save();
newBlogBost.save((error) => {
    if (error) {
        console.log('Oops, something happend');
    } else {
        console.log('Data has been saved!!');
    }
});

// HTTP request logger
app.use(morgan('dev'));

app.get('/api', (req, res) => {
    BlogPost.find({})
        .then((data) => {
            console.log(`Data: ${data}`);
            res.json(data);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
});

app.get('/api/name', (req, res) => {
    const data = {
        userName: 'Richard',
        age: 32
    };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});