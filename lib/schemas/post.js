import {Schema} from "mongoose";

const PostSchema = Schema({
    title:String,
    body:String,
    tags:Array,
    date_created:String
});

export default PostSchema;