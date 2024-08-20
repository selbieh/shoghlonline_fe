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
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const CompletedJobs = () => {
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
            style={{ paddingInline: 33, height: 95 }}
            className="flex justify-between items-center gap-2"
          >
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-[14px] font-normal leading-[15px] tracking-[0.5px] text-[#1E1F24]">
                Europe Street beat
              </span>
              <span className="text-[12px] font-normal leading-[15px] tracking-[0.5px] text-[#1E1F24]">
                fixed Price : 50$ | Feb 6, 2024 - Apr 30, 2024
              </span>
              <Rate disabled defaultValue={2} />
            </div>
            <div className="flex items-center justify-around h-[95px]">
              <span className="h-full w-1/4 flex justify-center items-end">
                <Image
                  src="/icons/quote-1.svg"
                  alt="quote"
                  width={42}
                  height={18}
                />
              </span>

              <span className="text-[10px]  font-normal leading-[24px] tracking-[0.5px] text-[#62636C] flex justify-center items-center flex-col">
                Europe Street beatEurope Street beatEurope Street beat
              </span>
              <span className="h-full flex items-start w-1/4">
                <Image
                  src="/icons/quote-2.svg"
                  alt="quote"
                  width={42}
                  height={18}
                />
              </span>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CompletedJobs;
