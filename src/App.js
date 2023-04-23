import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Intro from "./Pages/Intro";
import TabList from "./Pages/TabList";
import MapView from "./Pages/MapView";
import Profile from "./Pages/Profile";
import ProfileEdit from "./Pages/ProfileEdit.tsx";

import ProfileAbout from "./Pages/ProfileAbout";
import ProfileEvent from "./Pages/ProfileEvent";
import ProfileReview from "./Pages/ProfileReview";

import Login from "./Pages/Login.tsx";
import SignUp from "./Pages/SignUp.tsx";
import SwitchLayout from "./Pages/Switch";
import Verification from "./Pages/Verification";
import ResetPassword from "./Pages/ResetPassword.tsx";
import SelectLocation from "./Pages/SelectLocation";
import SearchPage from "./Pages/SearchPage";
import SelectInterest from "./Pages/SelectInterest";
import PositionedPopper from "./Pages/test.tsx";
import AddEvent from "./Pages/AddEvent.tsx";
import EventSubmit from "./Pages/EventSubmit.tsx";
import InviteFriend from "./Pages/InviteFriend.tsx";




import TestDate from "./Pages/testdate.tsx";



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

        <Route path='profileabout' element={<ProfileAbout />} /> 
        <Route path='profileevent' element={<ProfileEvent />} /> 
        <Route path='profilereview' element={<ProfileReview />} /> 


        <Route path='login' element={<Login />} />   
        <Route path='signup' element={<SignUp />} />   
        <Route path='verification' element={<Verification />} />   
        <Route path='resetpassword' element={<ResetPassword />} />  
        <Route path='selectlocation' element={<SelectLocation />} />  
        
        <Route path='searchpage' element={<SearchPage />} />       
        <Route path='switch' element={<SwitchLayout />} />   
        <Route path='selectinterest' element={<SelectInterest />} />   
        
        
        <Route path='test' element={<PositionedPopper />} />  
        <Route path='testdate' element={<TestDate />} /> 

        <Route path='addevent' element={<AddEvent />} /> 
        <Route path='eventsubmit' element={<EventSubmit />} />        
        <Route path='invitefriend' element={<InviteFriend />} />        

         
        
      </Routes>
    </>
  );
}
