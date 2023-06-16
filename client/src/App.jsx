import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <header>
          <a href="/" className="logo">
            {" "}
            MyBlog
          </a>
          <nav>
            <a href="/"> Login </a>
            <a href="/"> Register </a>
          </nav>
        </header>

        <div className="post">
          <div className="image">
            <img
              src="https://hexaware.com/wp-content/uploads/2019/10/Hi-Tech-Platforms-Information-Services.jpg"
              alt="img"
            />
          </div>
          <div className="texts">
            <h2>
              ReImagining Trust in Hi-Tech, Platforms & Information Services
              firms
            </h2>
            <p>
              Technology firms usually offer great solutions or platforms for
              your core business. However, they face challenges when it comes to
              scaling, supporting and achieving end-to-end effective business
              solutions.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
