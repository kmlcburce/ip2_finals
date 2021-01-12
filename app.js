const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
require('dotenv/config');
//Trial code using AtlasClient
const {MongoClient} = require('mongodb');
//Middleware
app.use(bodyParser.json());

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
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, 
() => console.log('Connected to DB'));


//Trial Code using native AtlasClient 

async function main(){
    const uri = "mongodb+srv://admin:admin123@cluster0.gp4uo.mongodb.net/Post?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        await listDatabase(client);
    } catch (e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.err);

async function listDatabase(client){
    const databaseList = await client.db("Post").collection("PostCollection");
    console.log("Databases:");
    databaseList.databases;
}