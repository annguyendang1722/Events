import React, { useState } from "react";
import { Container } from "@mui/material";
import EventsMapView from "../../Components/Home/Event/eventmapview";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export default function MapView() {

  const [open, setOpen] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Container maxWidth="sm">
      <Box className="mapview">


      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
        <EventsMapView />

        </Box>
      </Modal>
      
        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
            
      </Box>
    </Container>
  );
}

