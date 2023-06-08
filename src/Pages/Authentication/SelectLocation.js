import React, { useState } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import FormControl from "@mui/material/FormControl";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

export default function SelectLocation() {


  return (
    <Container maxWidth="sm">
      <Box className="mapview">


     <Paper className="searchmap" component="form">
      <Box className="searchmap__left">
      <IconButton>
        <NavigateBeforeIcon />
      </IconButton>
      <InputBase className="searchmap__input"
       
        placeholder="Tìm kiếm địa chỉ mới"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
     </Box>
      <IconButton className="searchmap__iconend" color="primary" sx={{ p: '10px' }} aria-label="directions">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M19.94 10C19.7135 7.97212 18.8042 6.08154 17.3613 4.63869C15.9185 3.19585 14.0279 2.28651 12 2.06V1C12 0.45 11.55 0 11 0C10.45 0 10 0.45 10 1V2.06C7.97212 2.28651 6.08154 3.19585 4.63869 4.63869C3.19585 6.08154 2.28651 7.97212 2.06 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12H2.06C2.28651 14.0279 3.19585 15.9185 4.63869 17.3613C6.08154 18.8042 7.97212 19.7135 10 19.94V21C10 21.55 10.45 22 11 22C11.55 22 12 21.55 12 21V19.94C14.0279 19.7135 15.9185 18.8042 17.3613 17.3613C18.8042 15.9185 19.7135 14.0279 19.94 12H21C21.55 12 22 11.55 22 11C22 10.45 21.55 10 21 10H19.94ZM11 18C7.13 18 4 14.87 4 11C4 7.13 7.13 4 11 4C14.87 4 18 7.13 18 11C18 14.87 14.87 18 11 18Z" fill="#5669FF"/>
          <circle cx="11" cy="11" r="4" fill="#A7B1FE"/>
      </svg>
      </IconButton>
    </Paper>
        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
        
        <FormControl className="profileedit__form mapview__button loginform__button">
            <Button variant="contained" href="/" endIcon={<ArrowForwardTwoToneIcon />}>
                Thêm
            </Button>
        </FormControl>
  

   
      
      </Box>
    </Container>
  );
}

