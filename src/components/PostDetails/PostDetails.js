import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const PostDetails =() =>{
        const {postId}= useParams();
        const [post, setPost] =useState({});

        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
        useEffect(()=>{
           fetch(url)
           .then(res => res.json())
           .then(data => setPost(data))
        },[])

        return (
         <div>
           <h2>PostDetails : {postId}</h2>
           <h4>{post.title}</h4>
           <p>{post.body}</p>
         </div>
        );
};

export default PostDetails;