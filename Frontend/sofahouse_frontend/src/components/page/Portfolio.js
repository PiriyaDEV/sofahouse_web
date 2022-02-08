import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/portfolio.css";

export default function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="page-container">
        {/* Work Section */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h1>Test</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Test</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Test</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Test</h1>
          </SwiperSlide>
        </Swiper>
        <div id="work-section">
          <div id="work-menu">
            <h1 className="sm-text grey-text work-active">
              Lyrics/ Song Writing
            </h1>
            <h1 className="sm-text grey-text">Music Production</h1>
            <h1 className="sm-text grey-text">Vocal Recording</h1>
            <h1 className="sm-text grey-text">Music Score</h1>
            <h1 className="sm-text grey-text">Mixing & Mastering</h1>
          </div>
          <div id="work-carousal">
          <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><h1>Test</h1></SwiperSlide>
              <SwiperSlide><h1>Test</h1></SwiperSlide>
              <SwiperSlide><h1>Test</h1></SwiperSlide>
              <SwiperSlide><h1>Test</h1></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
