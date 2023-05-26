import React, { useRef, useState } from "react";
import { Container } from "@mui/material";
import Events from "../../Components/Home/Event/event";
import Banner from "../../Components/Home/Banner/banner";
import Listbutton from "../../Components/Home/Listbutton/listbutton";
import Footerhome from "../../Components/Home/Layout/footerhome";
import HeaderEventReminder from "../../Components/Home/Layout/headereventreminder";
import EventVertical from "../../Components/Home/Event/eventvertical";



const EventReminder = () => {
  return (
    <Container className="homepage" maxWidth="sm">
  
      <HeaderEventReminder />
      <Listbutton />
      <Events />
      <Banner />
      <EventVertical />
      <Footerhome />
      
     </Container>
  );
};
export default EventReminder;