import React, { useRef, useState } from "react";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";
import {
  Navigation,
  Pagination,
  FreeMode,
  Thumbs,
} from "swiper";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Intro = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Container className="intro" maxWidth="sm">
     
  
    
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        // modules={[FreeMode, Thumbs]}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 intro__sliderimg"
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
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        pagination={true} 
        navigation={true}
        slidesPerView={1}
        freeMode={true}
        loop
        watchSlidesProgress={true}
        modules={[FreeMode,Pagination, Navigation, Thumbs]}
        className="mySwiper intro__text"
      >
        <SwiperSlide>
          <Box className="intro__box">
            <Box className="intro__inner"><p>Khám phá các sự kiện sắp tới và sự kiện gần nhất</p>
            <em>tận hưởng sự tiện lợi và nhanh chóng khi tham gia sự kiện</em></Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="intro__box">
            <Box className="intro__inner"><p>Tra cứu thêm các sự kiện hoặc hoạt động gần đó bằng bản đồ</p>
            <em>sử dụng dịch vụ map để kiềm kiếm di chuyển đến sự kiện của bạn</em></Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="intro__box">
            <Box className="intro__inner"><p>Khám phá các sự kiện sắp tới và sự kiện gần nhất</p>
            <em>tận hưởng sự tiện lợi và nhanh chóng khi tham gia sự kiện</em></Box>
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
  );
};

export default Intro;
