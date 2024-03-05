"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Customers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    dots: false,
    arrows: false, // Remove arrows from settings
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  const CustomSlide = ({ children, index }) => {
    const isActive = currentSlide === index;
    const opacityClass = isActive ? "" : "opacity-50";

    return (
      <div
        className={`flex flex-col items-center justify-center ${opacityClass}`}
      >
        {children}
      </div>
    );
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="mt-28 px-5 md:px-20">
        <div className="flex flex-col items-center justify-center pt-[90px]">
          <img src="/images/Deco-line.svg" alt="" />
          <p className="mt-5 text-[27px] font-normal text-[#1A202C] lg:text-[35px]">
            Why customers love
          </p>
          <p className="text-3xl font-bold text-[#1A202C] lg:text-[35px]">
            working with us
          </p>
        </div>

        <div className="relative flex items-center justify-center py-16 text-center">
          <img
            src="/images/VectorCustomers.svg"
            alt=""
            className="absolute left-72 top-16 hidden xl:block"
          />
          <img
            src="/images/VectorCustomers2.svg"
            alt=""
            className="absolute bottom-16 right-72 hidden xl:block"
          />
          <img
            src="/images/Btn-right (1).svg"
            alt=""
            className="absolute bottom-0 right-0 cursor-pointer lg:right-7 xl:right-20"
            onClick={goToNextSlide}
          />
          <img
            src="/images/Btn-left1.svg"
            alt=""
            className="absolute bottom-16 left-0 cursor-pointer lg:left-7 xl:left-20"
            onClick={goToPrevSlide}
          />
          <div className="text-lg font-normal leading-9 text-[#718096]">
            {currentSlide === 0 && (
              <>
                <div className="w-full lg:w-[535px]">
                  Without any doubt I recommend Alcaline Solutions as one of the
                  best web design and digital marketing agencies. One of the
                  best agencies I’ve come across so far. Wouldn’t be hesitated
                  to introduce their work to someone else.
                </div>
              </>
            )}
            {currentSlide === 1 && (
              <>
                {" "}
                <div className="w-full lg:w-[535px]">
                  Without any doubt I recommend Alcaline Solutions as one of the
                  best web design and digital marketing agencies. One of{" "}
                </div>
              </>
            )}
            {currentSlide === 2 && (
              <> Without any doubt I recommend Alcaline Solutions as one of </>
            )}
            {currentSlide === 3 && (
              <>
                {" "}
                <div className="w-full lg:w-[535px]">
                  Without any doubt I recommend Alcaline Solutions as one of the
                  best web design and digital marketing agencies. One of{" "}
                </div>
              </>
            )}
            {currentSlide === 4 && (
              <> Without any doubt I recommend Alcaline Solutions as one of </>
            )}
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          <CustomSlide index={0}>
            <div className="flex flex-col items-center justify-center ">
              <img src="/images/Ellipsecustomer1.png" alt="" />
              <div className="mt-4 flex items-center justify-center gap-1">
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[#57007B]">
                Romeena De Silva
              </h2>
              <p className="mt-2 text-sm font-normal text-[#000000]">
                Janet Cosmetics
              </p>
            </div>
          </CustomSlide>
          <CustomSlide index={1}>
            <div className="flex flex-col items-center justify-center ">
              <img src="/images/Ellipsecustomer2.png" alt="" />
              <div className="mt-4 flex items-center justify-center gap-1">
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[#57007B]">
                Romeena De Silva
              </h2>
              <p className="mt-2 text-sm font-normal text-[#000000]">
                Janet Cosmetics
              </p>
            </div>
          </CustomSlide>
          <CustomSlide index={2}>
            <div className="flex flex-col items-center justify-center ">
              <img src="/images/cutomers1.png" alt="" />
              <div className="mt-4 flex items-center justify-center gap-1">
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[#57007B]">
                Romeena De Silva
              </h2>
              <p className="mt-2 text-sm font-normal text-[#000000]">
                Janet Cosmetics
              </p>
            </div>
          </CustomSlide>
          <CustomSlide index={3}>
            <div className="flex flex-col items-center justify-center  ">
              <img src="/images/Ellipsecustomer3.png" alt="" />
              <div className="mt-4 flex items-center justify-center gap-1">
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[#57007B]">
                Romeena De Silva
              </h2>
              <p className="mt-2 text-sm font-normal text-[#000000]">
                Janet Cosmetics
              </p>
            </div>
          </CustomSlide>
          <CustomSlide index={4}>
            <div className="flex flex-col items-center justify-center  ">
              <img src="/images/Ellipsecustomer4.png" alt="" />
              <div className="mt-4 flex items-center justify-center gap-1">
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
                <img src="/images/Starcustomers.svg" alt="" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-[#57007B]">
                Romeena De Silva
              </h2>
              <p className="mt-2 text-sm font-normal text-[#000000]">
                Janet Cosmetics
              </p>
            </div>
          </CustomSlide>
        </Slider>
      </div>
    </>
  );
};

export default Customers;
