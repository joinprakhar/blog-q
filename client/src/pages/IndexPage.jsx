import React, { useEffect } from "react";
import Post from "../components/Post";

const IndexPage = () => {
  useEffect(() => {
    fetch('/post').then((response) =>{
      response.json().then(posts => {
        console.log(posts)
      })
    })
  }, []);

  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default IndexPage;
