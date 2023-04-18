import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Box from '@mui/material/Box';

import "swiper/css";


export default function Listbutton() {
  return (
    <Box className="listbutton">
      <Swiper slidesPerView={"auto"} spaceBetween={11} loop  className="mySwiper">
        <SwiperSlide className="listbutton__itemslide">
          <Box className="listbutton__slide">
            <span>
              <img src="img/icon1.png" />
            </span>
            <em>Sports</em>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="listbutton__itemslide">
          <Box className="listbutton__slide">
            <span>
              <img src="img/icon2.png" />
            </span>
            <em>Music</em>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="listbutton__itemslide">
          <Box className="listbutton__slide">
            <span>
              <img src="img/icon3.png" />
            </span>
            <em>Food</em>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="listbutton__itemslide">
          <Box className="listbutton__slide">
           
            <span>
              <img src="img/icon1.png" />
            </span> <em>Food</em>
          </Box>
        </SwiperSlide>

        <SwiperSlide className="listbutton__itemslide">
          <Box className="listbutton__slide">
            <span>
              <img src="img/icon1.png" />
            </span>
            <em>Sports</em>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="listbutton__itemslide">
          <Box className="listbutton__slide">
            <span>
              <img src="img/icon2.png" />
            </span>
            <em>Music</em>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="listbutton__itemslide">
          <Box className="listbutton__slide">
            <span>
              <img src="img/icon3.png" />
            </span>
            <em>Food</em>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="listbutton__itemslide">
          <Box className="listbutton__slide">
           
            <span>
              <img src="img/icon1.png" />
            </span> <em>Food</em>
          </Box>
        </SwiperSlide>



      </Swiper>
    </Box>
  );
}
