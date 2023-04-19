import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "swiper/css";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function EventVertical() {

  return (
    <Box className="event--tablist">
      <Box className="event__vertical">
    
        <Box className="event event__blog">
          <Card className="event__card">
            <CardMedia
              className="event__img"
              sx={{ height: 231 }}
              image="img/event1.png"
              title="green iguana"
            />
            <Box className="event__content">
              <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box></Box>
              <CardContent className="event__title">
                <Typography gutterBottom variant="h3">
                  Jo Malone London’s Mother’s Day Presents
                </Typography>
              </CardContent>
              <Box className="event__location">
                <LocationOnIcon></LocationOnIcon>
                <em>36 Guild Street London, UK </em>
              </Box>

            </Box>
          </Card>
          <Card className="event__card">
            <CardMedia
              className="event__img"
              sx={{ height: 231 }}
              image="img/event1.png"
              title="green iguana"
            />

            <Box className="event__content">
              <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box></Box>
              <CardContent className="event__title">
                <Typography gutterBottom variant="h3">
                  Jo Malone London’s Mother’s Day Presents
                </Typography>
              </CardContent>
              <Box className="event__location">
                <LocationOnIcon></LocationOnIcon>
                <em>36 Guild Street London, UK </em>
              </Box>

            </Box>
          </Card>
          <Card className="event__card">
            <CardMedia
              className="event__img"
              sx={{ height: 231 }}
              image="img/event1.png"
              title="green iguana"
            />
            <Box className="event__content">
              <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box></Box>
              <CardContent className="event__title">
                <Typography gutterBottom variant="h3">
                  Jo Malone London’s Mother’s Day Presents
                </Typography>
              </CardContent>
              <Box className="event__location">
                <LocationOnIcon></LocationOnIcon>
                <em>36 Guild Street London, UK </em>
              </Box>

            </Box>
          </Card>
          <Card className="event__card">
            <CardMedia
              className="event__img"
              sx={{ height: 231 }}
              image="img/event1.png"
              title="green iguana"
            />
            <Box className="event__content">
              <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box></Box>
              <CardContent className="event__title">
                <Typography gutterBottom variant="h3">
                  Jo Malone London’s Mother’s Day Presents
                </Typography>
              </CardContent>
              <Box className="event__location">
                <LocationOnIcon></LocationOnIcon>
                <em>36 Guild Street London, UK </em>
              </Box>

            </Box>
          </Card>
          <Card className="event__card">
            <CardMedia
              className="event__img"
              sx={{ height: 231 }}
              image="img/event1.png"
              title="green iguana"
            />

            <Box className="event__content">
              <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box></Box>
              <CardContent className="event__title">
                <Typography gutterBottom variant="h3">
                  Jo Malone London’s Mother’s Day Presents
                </Typography>
              </CardContent>
              <Box className="event__location">
                <LocationOnIcon></LocationOnIcon>
                <em>36 Guild Street London, UK </em>
              </Box>

            </Box>
          </Card>
          <Card className="event__card">
            <CardMedia
              className="event__img"
              sx={{ height: 231 }}
              image="img/event1.png"
              title="green iguana"
            />
            <Box className="event__content">
              <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box></Box>
              <CardContent className="event__title">
                <Typography gutterBottom variant="h3">
                  Jo Malone London’s Mother’s Day Presents
                </Typography>
              </CardContent>
              <Box className="event__location">
                <LocationOnIcon></LocationOnIcon>
                <em>36 Guild Street London, UK </em>
              </Box>

            </Box>
          </Card>



        </Box>
    
      </Box>
  </Box>
  );
}
