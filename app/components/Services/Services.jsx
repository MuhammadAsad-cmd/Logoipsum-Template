"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { useRef } from "react";

const Services = () => {
  const swiperRef = useRef(null);

  return (
    <div className=" relative mt-24 bg-[#F9F9FF] px-5 pb-28 pt-11">
      <img
        src="/images/Ellipse 180.svg"
        alt=""
        className="absolute  -top-8 left-1/3 -z-10 flex h-[72px] w-[72px] -translate-x-1/2 transform items-center justify-center"
      />
      <img
        src="/images/Ellipse 180.svg"
        alt=""
        className="absolute  -bottom-8 left-1/4 -z-10 flex h-[72px] w-[72px] -translate-x-1/2 transform items-center justify-center"
      />
      <div className="flex items-center justify-center">
        <p className="text-3xl font-bold lg:text-[35px]">Services we offer</p>
      </div>

      <div className="hidden lg:block">
        <Swiper
          ref={swiperRef}
          // modules={[Pagination]}
          slidesPerView={3.5}
          centeredSlides={true}
          spaceBetween={30}
          // pagination={{ clickable: true }}
          loop={true}
          className="z-40 mt-14"
        >
          <SwiperSlide>
            <div className="z-50 px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Mobile_app_perspective_matte.png"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
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
            <div className="z-50 px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Dashboard_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Software Testing Service
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="z-50 px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Code_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Mobile App Development
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="z-50 px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Dashboard_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Software Testing Service
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="z-50 px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Code_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Mobile App Development
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

      <div className="block lg:hidden">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          className="z-40 mt-14 px-5"
        >
          <SwiperSlide>
            <div className="z-50 mx-5 px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Mobile_app_perspective_matte.png"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
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
            <div className="z-50 mx-5 px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Dashboard_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Software Testing Service
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="z-50 mx-5 px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Code_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Mobile App Development
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="z-50 mx-5 px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Dashboard_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Software Testing Service
              </h3>
              <p className="mt-5 text-sm font-normal text-[#4A5568]">
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="z-50 mx-5 px-4 py-9">
              <div className="relative flex flex-shrink-0 flex-col items-start justify-center">
                <img src="/images/Ellipse 1.png" alt="" />
                <img
                  src="/images/Code_perspective_matte.svg"
                  alt=""
                  className="absolute left-3"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Mobile App Development
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

      <div className="mt-10  flex flex-col items-center justify-between gap-y-5 px-[140px] md:flex-row">
        <div></div>
        <div className=" flex items-center justify-center gap-2">
          <div className="h-[13px] w-[13px] rounded-full border border-[#cbd5e0]"></div>
          <div className="h-[13px] w-[13px] rounded-full border border-[#cbd5e0]"></div>
          <div className="paginationBorder h-[18px] w-[18px] rounded-full"></div>
          <div className="h-[13px] w-[13px] rounded-full border border-[#cbd5e0]"></div>
          <div className="h-[13px] w-[13px] rounded-full border border-[#cbd5e0]"></div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-base font-medium text-[#A0AEC0]">01</p>
          <div className="h-1 w-[111px] rounded-lg  bg-[#E2E8F0]">
            <p className="h-1 w-[18px] bg-[#57007B]"></p>
          </div>
          <p className="text-base font-medium text-[#57007B]">05</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
