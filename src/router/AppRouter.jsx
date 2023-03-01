import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailPost from "../pages/DetailPost";
import UpdatePost from "../pages/UpdatePost";
import Posts from "../pages/Posts";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/update-post/:id" element={<UpdatePost />} />
          <Route path="/detail-post/:id" element={<DetailPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
