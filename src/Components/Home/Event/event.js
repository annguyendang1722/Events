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
import Link from "@mui/material/Link";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function Events() {

  return (
    <Box className="event">
      <Box className="layouttextbutton">
        <Box className="layouttextbutton__text">Sự kiện sắp tới</Box>
        <Box className="layouttextbutton__button">
          <Link href="/eventuncomingpast">
            <em>Xem tất cả</em>
            <ArrowRightIcon></ArrowRightIcon>
          </Link>
        </Box>
      </Box>
      <Swiper
        slidesPerView={"auto"}
        loop
        spaceBetween={16}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card className="event__card">
            <Box className="event__header">
              <Box className="event__time">
                <Box className="event__date">10</Box>
                <Box className="event__month">JUNE</Box>
              </Box>
              <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box>
            </Box>
            <CardMedia
              className="event__img"
              sx={{ height: 131 }}
              image="img/event1.png"
              title="green iguana"
            />
            <CardContent className="event__title">
              <Typography gutterBottom variant="h3">
                International Band Mu...
              </Typography>
            </CardContent>
            <Box className="event__number">
              <AvatarGroup max={3}>
                <Avatar  className="event__avatar"
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                />
                <Avatar  className="event__avatar"
                  alt="Travis Howard"
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                />
                <Avatar  className="event__avatar"
                  alt="Cindy Baker"
                  src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                />
              </AvatarGroup>

              <span>+20 Tham gia</span>
            </Box>
            <Box className="event__location">
              <LocationOnIcon></LocationOnIcon>
              <em>36 Guild Street London, UK </em>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="event__card">
            <Box className="event__header">
              <Box className="event__time">
                <Box className="event__date">10</Box>
                <Box className="event__month">JUNE</Box>
              </Box>
              <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box>
            </Box>
            <CardMedia
              className="event__img"
              sx={{ height: 131 }}
              image="img/event1.png"
              title="green iguana"
            />
            <CardContent className="event__title">
              <Typography gutterBottom variant="h3">
                Jo Malone London’s Mo..
              </Typography>
            </CardContent>
            <Box className="event__number">
              <AvatarGroup max={3}>
                <Avatar  className="event__avatar"
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                />
                <Avatar  className="event__avatar"
                  alt="Travis Howard"
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                />
                <Avatar  className="event__avatar"
                  alt="Cindy Baker"
                  src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                />
              </AvatarGroup>

              <span>+20 Tham gia</span>
            </Box>
            <Box className="event__location">
              <LocationOnIcon></LocationOnIcon>
              <em>Radius Gallery • Santa Cruz, CA </em>
            </Box>
          </Card>
        </SwiperSlide>

      
        <SwiperSlide>
          <Card className="event__card">
            <Box className="event__header">
              <Box className="event__time">
                <Box className="event__date">10</Box>
                <Box className="event__month">JUNE</Box>
              </Box>
              <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box>
            </Box>
            <CardMedia
              className="event__img"
              sx={{ height: 131 }}
              image="img/event1.png"
              title="green iguana"
            />
            <CardContent className="event__title">
              <Typography gutterBottom variant="h3">
                International Band Mu...
              </Typography>
            </CardContent>
            <Box className="event__number">
              <AvatarGroup max={3}>
                <Avatar  className="event__avatar"
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                />
                <Avatar  className="event__avatar"
                  alt="Travis Howard"
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                />
                <Avatar  className="event__avatar"
                  alt="Cindy Baker"
                  src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                />
              </AvatarGroup>

              <span>+20 Tham gia</span>
            </Box>
            <Box className="event__location">
              <LocationOnIcon></LocationOnIcon>
              <em>36 Guild Street London, UK </em>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="event__card">
            <Box className="event__header">
              <Box className="event__time">
                <Box className="event__date">10</Box>
                <Box className="event__month">JUNE</Box>
              </Box>
              <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box>
            </Box>
            <CardMedia
              className="event__img"
              sx={{ height: 131 }}
              image="img/event1.png"
              title="green iguana"
            />
            <CardContent className="event__title">
              <Typography gutterBottom variant="h3">
                Jo Malone London’s Mo..
              </Typography>
            </CardContent>
            <Box className="event__number">
              <AvatarGroup max={3}>
                <Avatar  className="event__avatar"
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                />
                <Avatar  className="event__avatar"
                  alt="Travis Howard"
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                />
                <Avatar  className="event__avatar"
                  alt="Cindy Baker"
                  src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                />
              </AvatarGroup>

              <span>+20 Tham gia</span>
            </Box>
            <Box className="event__location">
              <LocationOnIcon></LocationOnIcon>
              <em>Radius Gallery • Santa Cruz, CA </em>
            </Box>
          </Card>
        </SwiperSlide>

       
        <SwiperSlide>
          <Card className="event__card">
            <Box className="event__header">
              <Box className="event__time">
                <Box className="event__date">10</Box>
                <Box className="event__month">JUNE</Box>
              </Box>
              <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box>
            </Box>
            <CardMedia
              className="event__img"
              sx={{ height: 131 }}
              image="img/event1.png"
              title="green iguana"
            />
            <CardContent className="event__title">
              <Typography gutterBottom variant="h3">
                International Band Mu...
              </Typography>
            </CardContent>
            <Box className="event__number">
              <AvatarGroup max={3}>
                <Avatar  className="event__avatar"
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                />
                <Avatar  className="event__avatar"
                  alt="Travis Howard"
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                />
                <Avatar  className="event__avatar"
                  alt="Cindy Baker"
                  src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                />
              </AvatarGroup>

              <span>+20 Tham gia</span>
            </Box>
            <Box className="event__location">
              <LocationOnIcon></LocationOnIcon>
              <em>36 Guild Street London, UK </em>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="event__card">
            <Box className="event__header">
              <Box className="event__time">
                <Box className="event__date">10</Box>
                <Box className="event__month">JUNE</Box>
              </Box>
              <Box className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </Box>
            </Box>
            <CardMedia
              className="event__img"
              sx={{ height: 131 }}
              image="img/event1.png"
              title="green iguana"
            />
            <CardContent className="event__title">
              <Typography gutterBottom variant="h3">
                Jo Malone London’s Mo..
              </Typography>
            </CardContent>
            <Box className="event__number">
              <AvatarGroup max={3}>
                <Avatar  className="event__avatar"
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                />
                <Avatar  className="event__avatar"
                  alt="Travis Howard"
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                />
                <Avatar  className="event__avatar"
                  alt="Cindy Baker"
                  src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                />
              </AvatarGroup>

              <span>+20 Tham gia</span>
            </Box>
            <Box className="event__location">
              <LocationOnIcon></LocationOnIcon>
              <em>Radius Gallery • Santa Cruz, CA </em>
            </Box>
          </Card>
        </SwiperSlide>

            
      
       </Swiper>
    </Box>
  );
}
