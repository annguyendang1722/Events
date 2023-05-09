import React from "react";
import { Routes, Route } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Intro from "./Pages/Intro/Intro";
import EventUncomingPast from "./Pages/EventUncomingPast";
import MapView from "./Pages/Home/MapView";
import Profile from "./Pages/Home/Profile";
import ProfileEdit from "./Pages/Home/ProfileEdit.tsx";

import ProfileAbout from "./Pages/ProfileToChuc/ProfileAbout";
import ProfileEvent from "./Pages/ProfileToChuc/ProfileEvent";
import ProfileReview from "./Pages/ProfileToChuc/ProfileReview";

import Login from "./Pages/Authentication/Login.tsx";
import SignUp from "./Pages/Authentication/SignUp.tsx";
import SwitchLayout from "./Pages/Switch";
import Verification from "./Pages/Authentication/Verification.tsx";
import ResetPassword from "./Pages/Authentication/ResetPassword.tsx";
import SelectLocation from "./Pages/Authentication/SelectLocation";
import SearchPage from "./Pages/TimKiem/SearchPage";
import SelectInterest from "./Pages/Authentication/SelectInterest";
import PositionedPopper from "./Pages/test.tsx";
import AddEvent from "./Pages/TaoSuKien/AddEvent.tsx";
import EventSubmit from "./Pages/TaoSuKien/EventSubmit.tsx";
import InviteFriend from "./Pages/TaoSuKien/InviteFriend.tsx";
import EventDetails from "./Pages/TaoSuKien/EventDetails.tsx";
import EventPreview from "./Pages/TaoSuKien/EventPreview.tsx";
import EventBlockDetails from "./Pages/TaoSuKien/EventBlockDetails.tsx";


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
        <Route path='eventuncomingpast' element={<EventUncomingPast />} />
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
        <Route path='eventdetails' element={<EventDetails />} />        
        <Route path='eventpreview' element={<EventPreview />} />   
        <Route path='eventblockdetails' element={<EventBlockDetails />} />           
        
      </Routes>
    </>
  );
}
