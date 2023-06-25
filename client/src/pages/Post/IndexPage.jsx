import React, { useEffect, useState } from "react";
import Post from "./Post";

const IndexPage = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://blog-q-api.vercel.app/post").then((response) => {
      response.json().then((posts) => {
        setPost(posts);
      });
    });
  }, []);

  
  return (
    <div className=".indexPage">
      <Post post={posts} />
    </div>
  );
};

export default IndexPage;
//{posts.length > 0 && posts.map((post) => )} <Post post={posts} />