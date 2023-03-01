import { useState } from "react";
import { Box, Typography } from "@mui/material"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Autoplay,
//   Virtual
// } from "swiper/core";
import "swiper/swiper-bundle.css";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import { Topbar } from "./Topbar/Topbar";
import { Chartbar } from "./Chartbar/Chartbar";
import { SliderItem0, SliderItem1, SliderItem2, SliderItem3, SliderItem4 } from "./SliderItem";
import { palette } from "../../../themes";
import { SliderbarMobile } from "./Topbar/SliderbarMobile";

const count1 = 300000;
const count2 = 300000*2;
const Completionist = () => <span>Go</span>;
const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <Typography sx={{
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        width: '100%',  
        color: palette.common.white,
      }}>
        ~{minutes}:{seconds}
      </Typography>
    );
  }
};
const renderer1 = ({ minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <Typography variant="h3" sx={{
        fontWeight: 700,
        color: palette.text.secondary,
      }}>
        {minutes}:{seconds}
      </Typography>
    );
  }
};

// SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

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
    <Box mt={{ md: 8, xs: 0}}>
      <Topbar next={next} previous={previous} renderer={renderer1} count={count1}/>
      <SliderbarMobile next={next} previous={previous} />
      <Swiper
        id="swiper"
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // virtual
        slidesPerView={9/2}
        initialSlide={3}
        centeredSlides={true}
        centerInsufficientSlides={true}
        spaceBetween={30}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1.05,
            spaceBetweenSlides: 10
          },
          375: {
            width: 375,
            slidesPerView: 1.27,
            spaceBetweenSlides: 10
          },
          425: {
            width: 425,
            slidesPerView: 1.4,
            spaceBetweenSlides: 10
          },
          640: {
            width: 640,
            slidesPerView: 2,
            spaceBetweenSlides: 10
          },
          768: {
            width: 768,
            slidesPerView: 2.5,
            spaceBetweenSlides: 15
          },
          1024: {
            width: 1024,
            slidesPerView: 3.2,
            spaceBetweenSlides: 20
          },
          1440: {
            width: 1440,
            slidesPerView: 4.5,
            spaceBetweenSlides: 30
          },
        }}
        // slidesPerColumn={2}
        // slidesPerColumnFill="row"
        // slidesPerGroup={2}
        // autoplay
        // loop
        // onReachEnd={() => {
        //   const tmp = slides.unshift();
        //   slides.push(tmp);
        // }}
        // navigation
        // pagination
        onSwiper={(s) => {
          setSwiper(s);
        }}

        // onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        // onSlideChange={(swiper) => {
        //   console.log("Slide index changed to: ", swiper.activeIndex);
        // }}
      >
        {slides}
        <SwiperSlide style={{ listStyle: "none" }}>
          <SliderItem1 />
        </SwiperSlide>
        <SwiperSlide style={{ listStyle: "none" }}>
          <SliderItem2 />
        </SwiperSlide>
        <SwiperSlide style={{ listStyle: "none" }}>
          <SliderItem3 renderer={renderer} count={count1}/>
        </SwiperSlide>
        <SwiperSlide style={{ listStyle: "none" }}>
          <SliderItem4 renderer={renderer} count={count2}/>
        </SwiperSlide>
      </Swiper>
      <Chartbar />  
    </Box>
  )
}