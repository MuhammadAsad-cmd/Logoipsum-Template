import React from "react";

const Leading = () => {
  return (
    <>
      <div className="mt-44 flex flex-col justify-center gap-24 px-5 md:px-16 lg:flex-row xl:px-[105px]">
        <div className="w-full lg:w-[535px]">
          <img src="/images/Deco-line.svg" alt="" />
          <p className="mt-5 text-3xl font-normal text-[#1A202C] lg:text-[35px]">
            Leading companies trust us{" "}
            <span className="font-bold"> to develop software</span>
          </p>
          <p className="mt-[30px] text-lg font-normal text-[#718096]">
            We{" "}
            <span className=" text-[#9f2e7e]"> add development capacity</span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <div className="mt-[51px] flex cursor-pointer items-center gap-4 text-base font-medium text-[#57007B]">
            <p>See more Informations</p>
            <img src="/images/arrowRight.svg" alt="" />
          </div>
        </div>
        <div>
          <img src="/images/Abou-us-Video.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Leading;
