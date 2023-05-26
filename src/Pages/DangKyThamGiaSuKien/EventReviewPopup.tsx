import React, { useRef, useState } from "react";
import { Container } from "@mui/material";
import Events from "../../Components/Home/Event/event";
import Banner from "../../Components/Home/Banner/banner";
import Listbutton from "../../Components/Home/Listbutton/listbutton";
import Footerhome from "../../Components/Home/Layout/footerhome";
import Headerhome from "../../Components/Home/Layout/headerhome";
import EventVertical from "../../Components/Home/Event/eventvertical";


import StarIcon from '@mui/icons-material/Star';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const EventReviewPopup = () => {
  return (
    <Container className="homepage" maxWidth="sm">
      <Box className="header__popup">
        <Box className="header__popupinner">
          <Box className="header__dialog">
              <img src="img/imgp.png"/>
            <Box className="header__dialogtitle">International Band Music Concert</Box>
            <Box>
              <Box className="header__dialogcontent">
              Your feedback will help us to make improvements
              </Box>
              <Box className="header__dialogstar">
                <Box className="header__dialogstaritem">
                  <StarIcon></StarIcon>
                </Box>
                <Box className="header__dialogstaritem">
                  <StarIcon></StarIcon>
                </Box>
                <Box className="header__dialogstaritem">
                  <StarIcon></StarIcon>
                </Box>
                <Box className="header__dialogstaritem header__dialogstaritemgrey">
                  <StarIcon></StarIcon>
                </Box>
                <Box className="header__dialogstaritem header__dialogstaritemgrey">
                  <StarIcon></StarIcon>
                </Box>

              
              </Box>
            </Box>
            <Box className="header__dialogbutton">
              <Button className="header__button">No, Thanks</Button>
              <Button className="header__button">Rate</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Headerhome />
      <Listbutton />
      <Events />
      <Banner />
      <EventVertical />
      <Footerhome />
    </Container>
  );
};
export default EventReviewPopup;
