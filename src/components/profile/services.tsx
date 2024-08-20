"use client";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ServicesProfile = () => {
  return (
    <div>
      <div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="px-[22px]">
            <Image
              alt="example"
              src="https://via.placeholder.com/225x123"
              width={225}
              height={123}
              className="rounded-[12px]"
            />
            <span className="text-[10px] font-normal text-[#1E1F24] py-4">
              Europe Street beat
            </span>
            <div className="flex justify-between items-center py-3">
              <span className="flex items-start  text-[12px] font-bold w-[58px] h-[28px] px-[10px] py-[6px] rounded-[2px] bg-[#ECF2FF] text-[#7179CE]">
                100$
              </span>
              <span className="flex items-center justify-between w-[58px] h-[28px] px-[10px] py-[6px] rounded-[2px] bg-[#FFF4D6] text-[#7179CE]">
                <FaStar color="#FFB800" /> 4.9
              </span>
            </div>
          </div>
          <div className="px-[22px]">
            <Image
              alt="example"
              src="https://via.placeholder.com/225x123"
              width={225}
              height={123}
              className="rounded-[12px]"
            />
            <span className="text-[10px] font-normal text-[#1E1F24] py-4">
              Europe Street beat
            </span>
            <div className="flex justify-between items-center py-3">
              <span className="flex items-start  text-[12px] font-bold w-[58px] h-[28px] px-[10px] py-[6px] rounded-[2px] bg-[#ECF2FF] text-[#7179CE]">
                100$
              </span>
              <span className="flex items-center justify-between w-[58px] h-[28px] px-[10px] py-[6px] rounded-[2px] bg-[#FFF4D6] text-[#7179CE]">
                <FaStar color="#FFB800" /> 4.9
              </span>
            </div>
          </div>
          <div className="px-[22px]">
            <Image
              alt="example"
              src="https://via.placeholder.com/225x123"
              width={225}
              height={123}
              className="rounded-[12px]"
            />
            <span className="text-[10px] font-normal text-[#1E1F24] py-4">
              Europe Street beat
            </span>
            <div className="flex justify-between items-center py-3">
              <span className="flex items-start  text-[12px] font-bold w-[58px] h-[28px] px-[10px] py-[6px] rounded-[2px] bg-[#ECF2FF] text-[#7179CE]">
                100$
              </span>
              <span className="flex items-center justify-between w-[58px] h-[28px] px-[10px] py-[6px] rounded-[2px] bg-[#FFF4D6] text-[#7179CE]">
                <FaStar color="#FFB800" /> 4.9
              </span>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ServicesProfile;
