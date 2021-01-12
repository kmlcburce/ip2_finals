const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Default return val when this route is called
router.get('/', (req, res)=> {
    res.send('Post page');
});
//Exec when POST is requested
router.post('/', (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
    });
    console.log(req.body);
});

module.exports = router; 