import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-center px-4 md:px-16 lg:flex-row">
        <div className=" mr-0 md:mr-8">
          <h1 className="text-3xl font-light md:text-5xl lg:text-6xl">
            Great <span className="text-[#9f2e7e]"> software</span> is <br />
            <span className="text-4xl font-extrabold md:text-5xl">
              {" "}
              built by great <span className="text-[#9f2e7e]"> teams</span>
            </span>
          </h1>
          <p className="mt-4 text-base font-normal text-[#000000] md:mt-7 md:text-lg">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
          <button className="btn-Shadow mt-4 hidden h-12 w-32 rounded-lg bg-[#57007B] text-base font-semibold text-[#FAFAFA] md:mt-7 md:block md:h-[52px] md:w-44 md:text-sm">
            Let’s get started!
          </button>
          <button className="btn-Shadow mt-4 block h-12 w-32 rounded-lg bg-[#57007B] text-base font-semibold text-[#FAFAFA] md:mt-7 md:hidden md:h-[52px] md:w-44 md:text-sm">
            Let’s started!
          </button>
        </div>
        <div className="mt-8 md:ml-8 md:mt-0">
          <img
            className="max-w-full"
            src="/images/web-development 1 (1).png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
