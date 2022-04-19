import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {useNewUrlParser:true, useUnifiedTopology:true}

const client = new MongoClient(uri, options);
const mongodb_client = client.connect(err => {
    if(err) console.log(err);
    console.log('Database connected successfully!')
});

export default mongodb_client;