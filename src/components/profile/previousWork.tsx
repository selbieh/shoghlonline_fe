"use client";
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useTranslations } from "next-intl";
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

const PreviousWork = () => {
  const t = useTranslations();
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
            <div className="flex justify-center items-center py-3">
              <Button className="flex items-center justify-between h-[34px] px-[8px] py-[12px] rounded-[6px] text-[#7179CE]">
                {t("displayProject")}
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PreviousWork;
