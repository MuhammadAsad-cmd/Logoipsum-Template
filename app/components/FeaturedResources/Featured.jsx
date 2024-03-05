"use client";

const Featured = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-[70px]">
        <img src="/images/Deco-line.svg" alt="" />
        <p className="mt-5 text-[35px] font-normal text-[#1A202C]">Featured</p>
        <p className="text-[35px] font-bold text-[#1A202C]">Resources</p>
      </div>

      <div className="mt-[68px] grid grid-cols-1 gap-[30px] px-5 md:grid-cols-2 lg:grid-cols-4 lg:flex-row lg:px-0 xl:grid-cols-5">
        <div className="flex flex-col items-center ">
          <img
            src="/images/Rectangle 10.png"
            alt=""
            className="h-full w-full"
          />
          <p className="mt-5 text-center text-base font-medium text-[#2D3748]">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="mt-5 flex cursor-pointer items-center justify-center gap-5 text-[#57007B]">
            <p>Read More</p>
            <img src="/images/Vector.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <img
            src="/images/Rectangle 13.png"
            alt=""
            className="h-full w-full"
          />
          <p className="mt-5 text-base font-medium text-[#2D3748]">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="mt-5 flex cursor-pointer items-center justify-center gap-5 text-[#57007B]">
            <p>Read More</p>
            <img src="/images/Vector.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <img
            src="/images/Rectangle 12.png"
            alt=""
            className="h-full w-full"
          />
          <p className="mt-5 text-base font-medium text-[#2D3748]">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="mt-5 flex cursor-pointer items-center justify-center gap-5 text-[#57007B]">
            <p>Read More</p>
            <img src="/images/Vector.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <img
            src="/images/Rectangle 13.png"
            alt=""
            className="h-full w-full"
          />
          <p className="mt-5 text-base font-medium text-[#2D3748]">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="mt-5 flex cursor-pointer items-center justify-center gap-5 text-[#57007B]">
            <p>Read More</p>
            <img src="/images/Vector.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <img
            src="/images/Rectangle 10.png"
            alt=""
            className="h-full w-full"
          />
          <p className="mt-5 text-base font-medium text-[#2D3748]">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="mt-5 flex cursor-pointer items-center justify-center gap-5 text-[#57007B]">
            <p>Read More</p>
            <img src="/images/Vector.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
