import React, { useState } from "react";
import { Container } from "@mui/material";
import EventsMapView from "../Components/Home/Event/eventmapview";
import Box from "@mui/material/Box";

export default function MapView() {
  //   const classes = useStyles();
 
  
  return (
    <Container maxWidth="sm">
      <Box className="mapview">
        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
        <EventsMapView />
      
      </Box>
    </Container>
  );
}

