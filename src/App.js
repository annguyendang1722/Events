import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Intro from "./Pages/Intro";
import TabList from "./Pages/TabList";
import MapView from "./Pages/MapView";
import Profile from "./Pages/Profile";
import ProfileEdit from "./Pages/ProfileEdit";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SwitchLayout from "./Pages/Switch";

import "./assets/css/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  }
]);

export default function App() {
  return (
    <>
  
      <Routes>
        <Route index element={<Home />} />
       
        <Route path='intro' element={<Intro />} />
        <Route path='tabpage' element={<TabList />} />
        <Route path='mapview' element={<MapView />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profileedit' element={<ProfileEdit />} />   
        <Route path='login' element={<Login />} />   
        <Route path='signup' element={<SignUp />} />   
        <Route path='switch' element={<SwitchLayout />} />   
        

      </Routes>
    </>
  );
}
