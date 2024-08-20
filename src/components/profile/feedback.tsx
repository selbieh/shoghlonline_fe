"use client";
import { Card, Rate } from "antd";
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
const FeedbackProfile = () => {
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
          <div
            // style={{ width: 179 }}
            className="flex flex-col justify-center items-center gap-2 px-[22px]"
          >
            <Image
              alt="example"
              src="https://via.placeholder.com/26x26"
              width={26}
              height={26}
              className="rounded-full"
            />
            <span className="text-[12px] font-bold leading-[24px] tracking-[0.5px]">
              Europe Street beat
            </span>
            <span className="text-[10px] font-normal leading-[24px] tracking-[0.5px] text-[#62636C] text-center">
              lubricant oil of 30w-40 lubricant oil of 30w-40 lubricant oil of
              30w-40 lubricant oil of 30w-40
            </span>
            <div className="flex  px-[10px] py-[4px] rounded-[2px] bg-[#FFF4D6]">
              <Rate disabled defaultValue={2} />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default FeedbackProfile;
