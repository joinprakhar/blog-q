import React from 'react'

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://hexaware.com/wp-content/uploads/2019/10/Hi-Tech-Platforms-Information-Services.jpg"
          alt="img"
        />
      </div>
      <div className="texts">
        <h2>
          ReImagining Trust in Hi-Tech, Platforms & Information Services firms
        </h2>
        <p className="info">
          <span className="author">Prakhar Pandey </span>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          Technology firms usually offer great solutions or platforms for your
          core business. However, they face challenges when it comes to scaling,
          supporting and achieving end-to-end effective business solutions.
        </p>
      </div>
    </div>
  );
}

export default Post