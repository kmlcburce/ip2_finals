const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
//Middleware
app.use('/', () => {
    console.log('Middleware hit');
});
//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
//Routes
app.get('/', (req, res)=> {
    res.send('HOME');
});
//Listeners
app.listen(3000);

//DB Connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, 
() => console.log('Connected to DB'));
