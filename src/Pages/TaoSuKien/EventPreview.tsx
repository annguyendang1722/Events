import React from "react";
import { Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";



const EventPreview = () => {
  return (
    <Container className="addevent addevent--eventpreview addevent--details" maxWidth="sm">
       <Box className ="addevent__bannereventpreview">
          <Typography variant="span" component="span">
              ngày 19 tháng 02 năm 2023
          </Typography>
          <Typography variant="h1" component="h1">
              International Band Music Concert
          </Typography>
          <Typography variant="p" component="p">
          <LocationOnIcon></LocationOnIcon> 36 Guild Street London, UK 
          </Typography>
          <Typography variant="p" component="p">
              Thành viên
          </Typography>
          <Box className="event__number">
         
          <AvatarGroup className="addevent__listavatar" spacing={3} max={4}>
              <Avatar className="addevent__imgavatar"
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Agnes Walker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Agnes Walker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Agnes Walker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Trevor Henderson"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
          </AvatarGroup>

              <span>Tham dự </span>
            </Box>
       </Box>

    

      <img src="img/human.png" />
   

    
      <FormControl className="selectinterest__submit">
        <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
          Mua vé 100.000 VNĐ
        </Button>
      </FormControl>
    </Container>
  );
};
export default EventPreview;
