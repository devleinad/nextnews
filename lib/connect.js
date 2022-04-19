import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

async function dbConnect(){
    const connection = await mongoose.connect(uri).then(() => console.log('CONNECTED SUCCESSFULLY!')).catch(err => console.log(err));
    return connection;
}

export default dbConnect
