import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation, Pagination,Thumbs } from "swiper";

const Intro = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Container className="intro" maxWidth="sm">
      <Swiper
        
        loop={true}
        spaceBetween={10}
        pagination={true} 
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 intro__sliderimg"
     
        watchSlidesProgress={true}
        freeMode={true} 
        onSwiper={setThumbsSwiper}
      >
        <SwiperSlide>
          <img  src="/img/iphone1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="/img/iphone2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="/img/iphone3.png" />
        </SwiperSlide>
      
      </Swiper>
      <Swiper
       
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        pagination={true} 
        modules={[FreeMode, Navigation,Pagination, Thumbs]}
        className="mySwiper intro__text"


        thumbs={{ swiper: thumbsSwiper }}


      >
        <SwiperSlide>
          <Box className="intro__box">
            <Box className="intro__inner"><p>Khám phá các sự kiện sắp tới và sự kiện gần nhất</p>
            <em>tận hưởng sự tiện lợi và nhanh chóng khi tham gia sự kiện</em></Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="intro__box">
            <Box className="intro__inner"><p>Tính năng lịch hiện đại</p>
            <em>sử dụng dịch vụ map để kiềm kiếm di chuyển đến sự kiện của bạn</em></Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="intro__box">
            <Box className="intro__inner"><p>Tra cứu thêm các sự kiện hoặc hoạt động gần đó bằng bản đồ</p>
            <em>sử dụng dịch vụ map để kiềm kiếm di chuyển đến sự kiện của bạn</em></Box>
          </Box>
        </SwiperSlide>
      </Swiper>

      <Box className="swiper-next-prev"> 
          <Box className="swiper-button-prev">
    
            <Link href="/">
                  Bỏ qua
            </Link>
          </Box>   
          
      </Box>
      </Container>
    </>
  );
};
export default Intro;
