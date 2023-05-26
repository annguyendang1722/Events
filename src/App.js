import React from "react";
import { Routes, Route } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Intro from "./Pages/Intro/Intro";
import EventUncomingPast from "./Pages/Home/EventUncomingPast";
import MapView from "./Pages/Home/MapView";
import Profile from "./Pages/Home/Profile";
import ProfileEdit from "./Pages/Home/ProfileEdit.tsx";

import ProfileAbout from "./Pages/ProfileToChuc/ProfileAbout";
import ProfileEvent from "./Pages/ProfileToChuc/ProfileEvent";
import ProfileReview from "./Pages/ProfileToChuc/ProfileReview";

import Login from "./Pages/Authentication/Login.tsx";
import SignUp from "./Pages/Authentication/SignUp.tsx";

import Verification from "./Pages/Authentication/Verification.tsx";
import ResetPassword from "./Pages/Authentication/ResetPassword.tsx";
import SelectLocation from "./Pages/Authentication/SelectLocation";
import SearchPage from "./Pages/TimKiem/SearchPage";
import SelectInterest from "./Pages/Authentication/SelectInterest";

import AddEvent from "./Pages/TaoSuKien/AddEvent.tsx";
import EventSubmit from "./Pages/TaoSuKien/EventSubmit.tsx";
import InviteFriend from "./Pages/TaoSuKien/InviteFriend.tsx";
import EventDetails from "./Pages/TaoSuKien/EventDetails.tsx";
import EventPreview from "./Pages/TaoSuKien/EventPreview.tsx";
import EventBlockDetails from "./Pages/TaoSuKien/EventBlockDetails.tsx";



import ButTicket from "./Pages/DangKyThamGiaSuKien/ButTicket.tsx";
import Ticket from "./Pages/DangKyThamGiaSuKien/Ticket.tsx";
import ScanCard from "./Pages/DangKyThamGiaSuKien/ScanCard.tsx";
import Confirm from "./Pages/DangKyThamGiaSuKien/Confirm.tsx";
import CovidDeclaration from "./Pages/DangKyThamGiaSuKien/CovidDeclaration.tsx";
import Payment from "./Pages/DangKyThamGiaSuKien/Payment.tsx";
import EventReminder from "./Pages/DangKyThamGiaSuKien/EventReminder.tsx";
import EventReviewPopup from "./Pages/DangKyThamGiaSuKien/EventReviewPopup.tsx";

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
  
        <Route path='selectinterest' element={<SelectInterest />} />   
        
        


        <Route path='addevent' element={<AddEvent />} /> 
        <Route path='eventsubmit' element={<EventSubmit />} />        
        <Route path='invitefriend' element={<InviteFriend />} />        
        <Route path='eventdetails' element={<EventDetails />} />        
        <Route path='eventpreview' element={<EventPreview />} />   
        <Route path='eventblockdetails' element={<EventBlockDetails />} />          



        <Route path='butticket' element={<ButTicket />} />  
        <Route path='ticket' element={<Ticket />} />  
        <Route path='confirm' element={<Confirm />} />
        <Route path='scancard' element={<ScanCard />} />  
        <Route path='coviddeclaration' element={<CovidDeclaration />} />         
        <Route path='payment' element={<Payment />} /> 
        <Route path='eventreminder' element={<EventReminder />} /> 
        <Route path='eventreviewpopup' element={<EventReviewPopup />} /> 
        
      </Routes>
    </>
  );
}
