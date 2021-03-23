const mongoose = require('mongoose');

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
