import React, { useRef, useState } from "react";
import { Container } from "@mui/material";
import Headerhome from "../../Components/Home/Layout/headerhome";
import EventVertical from "../../Components/Home/Event/eventvertical";



const SearchPage = () => {
  return (
    <Container className="homepage" maxWidth="sm">
      
      <Headerhome />
     
      <EventVertical />
     
      
     </Container>
  );
};
export default SearchPage;