import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/Detail";
import UpdatePost from "../pages/UpdatePost";
import NewPost from "../pages/NewPost";
import Profile from "../pages/Profile";
import Navbar from "../components/Navbar";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/new-post" element={<PrivateRouter />}>
          <Route path="" element={<NewPost />} />
        </Route>
        <Route path="/update-post/:id" element={<PrivateRouter />}>
          <Route path="" element={<UpdatePost />} />
        </Route>
        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
