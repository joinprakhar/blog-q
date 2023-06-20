import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./context/userContext";
import CreatePost from "./pages/CreatePost";
import Postpage from "./pages/postpage";
import EditPost from "./pages/EditPost";
import ProfilePage from "./pages/profilePage";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<Postpage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
