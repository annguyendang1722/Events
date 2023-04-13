import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "swiper/css";


export default function EventsMapView() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];

  return (
    

     <div className="event event--tablist">
      <Swiper slidesPerView={1.4}  centeredSlides
      loop spaceBetween={10}  className="mySwiper">
        <SwiperSlide>
              <Card className="event__card">
                <CardMedia
                  className="event__img"
                  sx={{ height: 231 }}
                  image="img/event1.png"
                  title="green iguana"
                />
                <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM</Box>
                <CardContent className="event__title">
                  <Typography gutterBottom variant="h3" component="Box">
                    International Band Mu...
                  </Typography>
                </CardContent>
                <Box className="event__location">
                  <LocationOnIcon></LocationOnIcon>
                  <em>36 Guild Street London, UK </em>
                </Box>
                <Box className="event__numbericonbox">
                  <Box className="event__number">
                    <ImageList
                      className="event__listimg"
                      sx={{ width: 100 }}
                      cols={3}
                      rowHeight={32}
                    >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                    <span>+20 Going</span>
                  </Box>
                  <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box>
                </Box>
              </Card>
        </SwiperSlide>
        <SwiperSlide>
              <Card className="event__card">
                <CardMedia
                  className="event__img"
                  sx={{ height: 231 }}
                  image="img/event1.png"
                  title="green iguana"
                />
                <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM</Box>
                <CardContent className="event__title">
                  <Typography gutterBottom variant="h3" component="Box">
                    International Band Mu...
                  </Typography>
                </CardContent>
                <Box className="event__location">
                  <LocationOnIcon></LocationOnIcon>
                  <em>36 Guild Street London, UK </em>
                </Box>
                <Box className="event__numbericonbox">
                  <Box className="event__number">
                    <ImageList
                      className="event__listimg"
                      sx={{ width: 100 }}
                      cols={3}
                      rowHeight={32}
                    >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                    <span>+20 Going</span>
                  </Box>
                  <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box>
                </Box>
              </Card>
        </SwiperSlide>
        <SwiperSlide>
              <Card className="event__card">
                <CardMedia
                  className="event__img"
                  sx={{ height: 231 }}
                  image="img/event1.png"
                  title="green iguana"
                />
                <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM</Box>
                <CardContent className="event__title">
                  <Typography gutterBottom variant="h3" component="Box">
                    International Band Mu...
                  </Typography>
                </CardContent>
                <Box className="event__location">
                  <LocationOnIcon></LocationOnIcon>
                  <em>36 Guild Street London, UK </em>
                </Box>
                <Box className="event__numbericonbox">
                  <Box className="event__number">
                    <ImageList
                      className="event__listimg"
                      sx={{ width: 100 }}
                      cols={3}
                      rowHeight={32}
                    >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                    <span>+20 Going</span>
                  </Box>
                  <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box>
                </Box>
              </Card>
        </SwiperSlide>

        <SwiperSlide>
              <Card className="event__card">
                <CardMedia
                  className="event__img"
                  sx={{ height: 231 }}
                  image="img/event1.png"
                  title="green iguana"
                />
                <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM</Box>
                <CardContent className="event__title">
                  <Typography gutterBottom variant="h3" component="Box">
                    International Band Mu...
                  </Typography>
                </CardContent>
                <Box className="event__location">
                  <LocationOnIcon></LocationOnIcon>
                  <em>36 Guild Street London, UK </em>
                </Box>
                <Box className="event__numbericonbox">
                  <Box className="event__number">
                    <ImageList
                      className="event__listimg"
                      sx={{ width: 100 }}
                      cols={3}
                      rowHeight={32}
                    >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                    <span>+20 Going</span>
                  </Box>
                  <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box>
                </Box>
              </Card>
        </SwiperSlide>
        <SwiperSlide>
              <Card className="event__card">
                <CardMedia
                  className="event__img"
                  sx={{ height: 231 }}
                  image="img/event1.png"
                  title="green iguana"
                />
                <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM</Box>
                <CardContent className="event__title">
                  <Typography gutterBottom variant="h3" component="Box">
                    International Band Mu...
                  </Typography>
                </CardContent>
                <Box className="event__location">
                  <LocationOnIcon></LocationOnIcon>
                  <em>36 Guild Street London, UK </em>
                </Box>
                <Box className="event__numbericonbox">
                  <Box className="event__number">
                    <ImageList
                      className="event__listimg"
                      sx={{ width: 100 }}
                      cols={3}
                      rowHeight={32}
                    >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                    <span>+20 Going</span>
                  </Box>
                  <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box>
                </Box>
              </Card>
        </SwiperSlide>
        <SwiperSlide>
              <Card className="event__card">
                <CardMedia
                  className="event__img"
                  sx={{ height: 231 }}
                  image="img/event1.png"
                  title="green iguana"
                />
                <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM</Box>
                <CardContent className="event__title">
                  <Typography gutterBottom variant="h3" component="Box">
                    International Band Mu...
                  </Typography>
                </CardContent>
                <Box className="event__location">
                  <LocationOnIcon></LocationOnIcon>
                  <em>36 Guild Street London, UK </em>
                </Box>
                <Box className="event__numbericonbox">
                  <Box className="event__number">
                    <ImageList
                      className="event__listimg"
                      sx={{ width: 100 }}
                      cols={3}
                      rowHeight={32}
                    >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                    <span>+20 Going</span>
                  </Box>
                  <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box>
                </Box>
              </Card>
        </SwiperSlide>


      </Swiper></div>
   
  );
}
