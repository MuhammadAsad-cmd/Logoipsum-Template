"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <>
      <div className="flex  items-center justify-center">
        <Swiper
          slidesPerView={3.5}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="grid grid-cols-4 gap-2"
        >
          <SwiperSlide>
            <div className="ShadowGradient rounded-xl   bg-[#FAFAFA] px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Code_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="ReadMore mt-4 text-xl font-semibold">
                Web Design & Development
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ShadowGradient rounded-xl   bg-[#FAFAFA] px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Code_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="ReadMore mt-4 text-xl font-semibold">
                Web Design & Development
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ShadowGradient rounded-xl   bg-[#FAFAFA] px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Code_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="ReadMore mt-4 text-xl font-semibold">
                Web Design & Development
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ShadowGradient rounded-xl   bg-[#FAFAFA] px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Code_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="ReadMore mt-4 text-xl font-semibold">
                Web Design & Development
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ShadowGradient rounded-xl   bg-[#FAFAFA] px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Code_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="ReadMore mt-4 text-xl font-semibold">
                Web Design & Development
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </>
  );
};

export default SwiperComponent;
