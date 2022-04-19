// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../lib/connect"
import Post from "../../lib/models/post";
import { join } from "path";
import fs from "fs";

//  const libDirectory = join(process.cwd(),'_posts');
//   console.log(libDirectory);

export function getPosts(req,res)  {
 
  dbConnect();
      const posts = Post.find();
      res.status(201).json({posts});
    //   console.log(posts);
    //   return JSON.stringify(posts);
    
  }
 

