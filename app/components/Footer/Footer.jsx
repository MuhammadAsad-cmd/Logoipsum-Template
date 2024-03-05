import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mx-5 mt-16 xl:mx-20 2xl:mx-40">
        <div className="bg-Secondary flex flex-col items-center justify-between gap-y-5 rounded-2xl py-8 lg:flex-row lg:py-12">
          <div className="w-full pl-0 md:px-0 lg:w-[530px] lg:pl-20">
            <p className="Hire text-center text-2xl font-bold lg:text-left lg:text-3xl">
              Hire the best developers and designers around!
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center pr-2 lg:pr-32">
            <img src="/images/Group 40.svg" alt="" />
            <button className="Footer1 absolute bottom-20 h-[44px] w-[200px] rounded-lg text-base font-bold text-white lg:bottom-14 lg:h-[57px] lg:w-[262px] lg:text-lg">
              Hire Top Developers
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-12 px-2 md:mt-16 md:px-8 lg:mt-24 lg:px-0 xl:px-[105px]">
        <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-3 md:gap-16 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center md:items-start">
            <img src="/images/Logo.svg" alt="" />
            <p className="mt-4 text-center text-base font-normal text-[#718096] md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <img
              src="/images/google-page-speed 1.png"
              alt=""
              className="mt-5 md:mt-9"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#4A5568]">Links</h1>
            <ul className="mt-5 space-y-5 text-base font-normal text-[#718096]">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Case Studies</li>
              <li className="cursor-pointer">How it works</li>
              <li className="cursor-pointer">Blog Careers</li>
              <li className="cursor-pointer">Areas We Serve</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#4A5568]">Contact us</h1>
            <ul className="mt-5 space-y-5 text-base font-normal text-[#718096]">
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
              <li className="cursor-pointer">+908 89097 890</li>
            </ul>
          </div>
          <div className="flex flex-shrink-0 items-end justify-center gap-4 md:justify-end">
            <div className="Footer-Icon flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FAFAFA]">
              <img src="/images/facebook 1.svg" alt="" />
            </div>
            <div className="Footer-Icon flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FAFAFA]">
              <img src="/images/instagram 1.svg" alt="" />
            </div>
            <div className="Footer-Icon flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FAFAFA]">
              <img src="/images/twitter 1.svg" alt="" />
            </div>
            <div className="Footer-Icon flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FAFAFA]">
              <img src="/images/linkedin 1.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>

      <div className="mt-20 h-[1px] w-full  bg-[#CBD5E0]"></div>
      <div className="flex items-center justify-center py-10 text-center">
        <p className="text-sm font-normal text-[#4A5568]">
          © 2023 Copyright by Agency Solutions. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
