import React from "react";

const Works = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-[70px]">
        <img src="/images/Deco-line.svg" alt="" />
        <p className="mt-5 text-[35px] font-normal text-[#1A202C]">
          How development
        </p>
        <p className="text-center text-[35px] font-bold text-[#1A202C]">
          through Alcaline works
        </p>
      </div>

      <div className="mt-5 flex flex-col items-center justify-center gap-y-11 px-5 lg:justify-between">
        <div className="mt-5 grid grid-cols-1 gap-6  pl-0 md:mt-[88px] md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-16 lg:pl-5">
          <div className="relative flex h-full w-full flex-col items-center justify-center lg:h-[160px] lg:w-[300px]">
            <div className="rounded-2xl border py-6 pl-5 pr-6">
              <div className="flex items-center gap-[10px] text-lg font-bold">
                <p className="ReadMore">#1</p>
                <p className="text-[#1A202C]">Assemble the right team</p>
              </div>
              <p className="mt-4 text-sm font-normal text-[#718096]">
                We handle all aspects of vetting and choosing the right team
                that you don&apos;t have the time, expertise, or desire to do.
              </p>
            </div>
            <img
              src="/images/Line 7.svg"
              alt=""
              className="absolute -bottom-[65px] hidden lg:block"
            />
          </div>
          <div className="relative flex h-full w-full flex-col items-center justify-center lg:h-[160px] lg:w-[300px]">
            <div className=" rounded-2xl border py-6 pl-5 pr-8">
              <div className="flex items-center gap-[10px] text-lg font-bold">
                <p className="ReadMore">#2</p>
                <p className="text-[#1A202C]">Tech architecture</p>
              </div>
              <p className="mt-4 text-sm font-normal text-[#718096]">
                We handle all aspects of vetting and choosing the right team
                that you don&apos;t have the time, expertise, or desire to do.
              </p>
            </div>
            <img
              src="/images/Line 7.svg"
              alt=""
              className="absolute -bottom-[65px] hidden lg:block"
            />
          </div>
          <div className="relative flex h-full w-full flex-col items-center justify-center lg:h-[160px] lg:w-[300px]">
            <div className=" rounded-2xl border py-6 pl-5 pr-8">
              <div className="flex items-center gap-[10px] text-lg font-bold">
                <p className="ReadMore">#3</p>
                <p className="text-[#1A202C]">Code reviews</p>
              </div>
              <p className="mt-4 text-sm font-normal text-[#718096]">
                We handle all aspects of vetting and choosing the right team
                that you don&apos;t have the time, expertise, or desire to do.
              </p>
            </div>
            <img
              src="/images/Line 7.svg"
              alt=""
              className="absolute -bottom-[65px] hidden lg:block"
            />
          </div>
        </div>

        <div className="hidden items-center px-[105px] lg:flex 2xl:px-10">
          <img src="/images/Line 5.svg" alt="" className="h-full  w-full" />
          <img src="/images/Trophy_perspective_matte.png" alt="" />
        </div>

        <div className="grid grid-cols-1 gap-10 pl-0 md:grid-cols-2 lg:grid-cols-3 xl:pl-[100px] ">
          <div className="relative flex h-full w-full flex-col items-center justify-center lg:h-[160px] lg:w-[300px]">
            <img
              src="/images/Line 7.svg"
              alt=""
              className="absolute -top-16 hidden lg:block"
            />
            <div className=" rounded-2xl border py-6 pl-5 pr-8">
              <div className="flex items-center gap-[10px] text-lg font-bold">
                <p className="ReadMore">#4</p>
                <p className="text-[#1A202C]">Sprint planning</p>
              </div>
              <p className="mt-4 text-sm font-normal text-[#718096]">
                We handle all aspects of vetting and choosing the right team
                that you don&apos;t have the time, expertise, or desire to do.
              </p>
            </div>
          </div>
          <div className="relative flex h-full w-full flex-col items-center justify-center lg:h-[160px] lg:w-[300px]">
            <img
              src="/images/Line 7.svg"
              alt=""
              className="absolute -top-16 hidden lg:block"
            />
            <div className=" rounded-2xl border py-8 pl-5 pr-2">
              <div className="flex items-center gap-[10px] text-lg font-bold">
                <p className="ReadMore">#5</p>
                <p className="text-[#1A202C]">Standups & weekly demos</p>
              </div>
              <p className="mt-4 text-sm font-normal text-[#718096]">
                We handle all aspects of vetting and choosing the right team
                that you don&apos;t have the time, expertise, or desire to do.
              </p>
            </div>
          </div>
          <div className="relative flex h-full w-full flex-col items-center justify-center lg:h-[160px] lg:w-[300px]">
            <img
              src="/images/Line 7.svg"
              alt=""
              className="absolute -top-16 hidden lg:block"
            />
            <div className=" rounded-2xl border py-6 pl-5 pr-8">
              <div className="flex items-center gap-[10px] text-lg font-bold">
                <p className="ReadMore">#6</p>
                <p className="text-[#1A202C]">Iterative delivery</p>
              </div>
              <p className="mt-4 text-sm font-normal text-[#718096]">
                We handle all aspects of vetting and choosing the right team
                that you don&apos;t have the time, expertise, or desire to do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
