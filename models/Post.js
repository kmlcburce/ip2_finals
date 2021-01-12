const mongoose = require('mongoose');

//adds in scheme (format) when inserting a post
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);