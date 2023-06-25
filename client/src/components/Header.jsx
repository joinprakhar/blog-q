import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext.jsx";

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  function profile() {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }

  useEffect(() => {
    profile();
  }, []);



  function logout() {
    setUserInfo(null);
    fetch("https://blog-q-api.vercel.app/logout", {
      credentials: "include",
      method: "POST",
    });
  }

  return (
    <div>
      <header>
        <Link to="/" className="logo">
          The Post
        </Link>
        <nav>
          {userInfo && (
            <>
              <Link to="/create">Create new post</Link>
              <Link to={`/profile/${userInfo?.id}`}>{userInfo?.Name}</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          )}
          {!userInfo && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
//
