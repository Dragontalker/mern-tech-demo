const express = require('express');

const router = express.router();

router.get('/api', (req, res) => {
    BlogPost.find({})
        .then((data) => {
            console.log(`Data: ${data}`);
            res.json(data);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
});

router.get('/api/name', (req, res) => {
    const data = {
        userName: 'Richard',
        age: 32
    };
    res.json(data);
});


module.exports = router;