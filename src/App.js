import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Intro from "./Pages/Intro";
import TabList from "./Pages/TabList";
import MapView from "./Pages/MapView";





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
        
        

      </Routes>
    </>
  );
}
