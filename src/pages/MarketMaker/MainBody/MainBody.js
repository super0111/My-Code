import { useState } from "react";
import { Box } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";

import { Topbar } from "./Topbar/Topbar";
import { Chartbar } from "./Chartbar/Chartbar";
import { SliderItem0, SliderItem1, SliderItem2, SliderItem3, SliderItem4 } from "./SliderItem";


SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export const MainBody = () => {
  const slides = [];
  const [swiper, setSwiper] = useState(null);
  let length = 3;


  const next = () => {
    swiper.slideNext();
  };
  const previous = () => {
    swiper.slidePrev();
  };

  for (let i = 0; i < length; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
        <SliderItem0 />
      </SwiperSlide>
    );
  }

  return (
    <Box mt={8}>
      <Topbar next={next} previous={previous} />
      <Box>
        <Swiper
          id="swiper"
          virtual
          slidesPerView={9/2}
          initialSlide={3}
          centeredSlides={true}
          centerInsufficientSlides={true}
          // slidesPerColumn={2}
          // slidesPerColumnFill="row"
          spaceBetween={30}
          // slidesPerGroup={2}
          // autoplay
          // loop
          onReachEnd={() => {
            console.log("reach end");
            const tmp = slides.unshift();
            slides.push(tmp);
          }}
          navigation
          // pagination
          onSwiper={(s) => {
            console.log("initialize swiper", s);
            setSwiper(s);
          }}


          onInit={(swiper) => console.log("Swiper initialized!", swiper)}
          onSlideChange={(swiper) => {
            console.log("Slide index changed to: ", swiper.activeIndex);
          }}
        >
          {slides}
          <SwiperSlide style={{ listStyle: "none" }}>
            <SliderItem1 />
          </SwiperSlide>
          <SwiperSlide style={{ listStyle: "none" }}>
            <SliderItem2 />
          </SwiperSlide>
          <SwiperSlide style={{ listStyle: "none" }}>
            <SliderItem3 />
          </SwiperSlide>
          <SwiperSlide style={{ listStyle: "none" }}>
            <SliderItem4 />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Chartbar />  
    </Box>
  )
}