"use client";
import React, { useEffect, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-between px-5 py-3 lg:px-[25px] ${
          scrolling
            ? "Shadows sticky top-0 z-50 bg-[#FAFAFA]"
            : " Shadows bg-white"
        }`}
      >
        <div>
          <img src="/images/Logo.svg" alt="" />
        </div>
        <div className="hidden items-center gap-9 text-base font-medium text-[#4A5568] lg:flex xl:gap-12">
          <a href="">About us</a>
          <a href="">Services</a>
          <a href="">Case Studies</a>
          <a href="">Blog</a>
          <a href="">How it Works</a>
          <a href="">Hire</a>
        </div>
        <div className="flex items-center gap-4">
          <div>
            {menuOpen ? (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden"
              >
                <RxCross1 className="ReadMore text-2xl" />
              </button>
            ) : (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden"
              >
                <TiThMenuOutline className="ReadMore text-2xl" />
              </button>
            )}
          </div>
          <div className="hidden lg:block">
            <button className="Header-Gradient  h-[42px] w-[124px] rounded-lg text-sm font-semibold text-[#FAFAFA]">
              Contact us
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="block lg:hidden">
          <div className="flex flex-col bg-[#FFFFFF] px-5 text-start text-[#4A5568] duration-500 ease-in-out ">
            <p className="cursor-pointer p-4">About us</p>
            <p className="cursor-pointer p-4">Services</p>
            <p className="cursor-pointer p-4">Case Studies</p>
            <p className="cursor-pointer p-4">Blog</p>
            <p className="cursor-pointer p-4">How it Works</p>
            <p className="cursor-pointer p-4">Hire</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
