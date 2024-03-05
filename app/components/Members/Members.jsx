"use client";

const Members = () => {
  return (
    <>
      <div className="mt-40 px-5 md:px-16 xl:px-[105px]">
        <img src="/images/Deco-line.svg" alt="" />
        <p className="mt-5 text-3xl font-normal text-[#1A202C] lg:text-[35px]">
          Meet the People <br />
          <span className="font-bold">We are Working With</span>
        </p>
      </div>

      <div className="mt-5 hidden items-center justify-center gap-[22px] px-20 lg:mt-0 lg:flex lg:justify-end">
        <img src="/images/Btn-left.svg" alt="" className="cursor-pointer" />
        <div className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full bg-[#57007B]">
          <img src="/images/arrowRight2.svg" alt="" />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <div className=" mt-20 hidden w-full flex-wrap items-center justify-between bg-[#F7F7FA] py-16 md:flex">
          <img src="/images/Logo-9.png" alt="" />
          <img src="/images/logo8.png" alt="" />
          <img src="/images/logo5.png" alt="" />
          <img src="/images/Logo-7.png" alt="" />
          <img src="/images/logo9.png" alt="" />
          <img src="/images/Logo-6.png" alt="" />
          <img src="/images/logo3.png" alt="" />
        </div>

        <div className="absolute top-12 -z-30">
          <img src="/images/Ellipse 182.svg" alt="" />
        </div>
      </div>
      <div className="block md:hidden">
        <div className="mx-auto mt-20 grid w-full grid-cols-2 gap-5 bg-[#F7F7FA] px-5 py-16 md:grid-cols-2">
          <img src="/images/Logo-9.png" alt="" />
          <img src="/images/logo8.png" alt="" />
          <img src="/images/logo5.png" alt="" />
          <img src="/images/Logo-7.png" alt="" />
          <img src="/images/logo9.png" alt="" />
          <img src="/images/Logo-6.png" alt="" />
          <img src="/images/logo3.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Members;
