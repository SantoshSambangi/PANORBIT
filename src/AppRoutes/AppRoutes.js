import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../Pages/Profile/Profile";
import Post from "../Pages/Post/Post";
import Gallery from "../Pages/Gallery/Gallery";
import ToDo from "../Pages/ToDo/ToDo";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/todo" element={<ToDo />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
