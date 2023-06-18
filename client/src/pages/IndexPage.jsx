import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const IndexPage = () => {
  const [posts, setPost] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/post').then((response) =>{
      response.json().then(posts => {
        setPost(posts);
      })
    })
  }, []);
<<<<<<< HEAD
  return (
    <>
      {posts.length > 0 && posts.map(post =>(
        <Post {...post} />
=======
  
  return (
    <>
      {posts.length > 0 && posts.map(post =>(
        <Post post={posts} />
>>>>>>> 064a111f532124cbeb8252c6e69ddd166f89e25c
      ))}
    </>
  );
};

export default IndexPage;
