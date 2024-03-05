import React from "react";

const CaseStudy = () => {
  return (
    <>
      <div className="relative mt-[140px] bg-[#F7F7FA]">
        <img
          src="/images/Deco-img-arrow.svg"
          alt=""
          className="absolute -top-32 left-24 hidden lg:block"
        />
        <img
          src="/images/Deco-img-arrow2.svg"
          alt=""
          className="absolute -top-24 right-28  hidden lg:block"
        />
        <div className="flex flex-col items-center justify-center pt-[90px]">
          <img src="/images/Deco-line.svg" alt="" />
          <p className="mt-5 text-[35px] font-normal text-[#1A202C]">
            Our recent
          </p>
          <p className="text-[35px] font-bold text-[#1A202C]">Case studies</p>
        </div>

        <div className="mx-5 mt-20 grid grid-cols-1 rounded-3xl border bg-[#F1F2FF] md:mx-10 lg:grid-cols-2 xl:mx-[104px]">
          <img
            src="/images/Case-study__image.png"
            alt=""
            className="h-full w-full"
          />
          <div className="flex flex-col px-3 lg:px-6">
            <p className="pt-10 text-2xl font-semibold text-[#2D3748] lg:text-[28px]">
              Website Design for SCFC Canada
            </p>
            <p className="mt-[30px] text-sm font-normal text-[#4A5568]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>

            <div className=" mt-[60px] flex cursor-pointer items-center justify-end gap-1 pb-5 text-sm font-semibold">
              <p className="ReadMore">Read more</p>
              <img src="/images/arrow-right-s-line.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="mx-5 mt-20 grid grid-cols-1 rounded-3xl border bg-[#F1F2FF] md:mx-10 lg:grid-cols-2 xl:mx-[104px]">
          <img
            src="/images/Case-study__image1.png"
            alt=""
            className="h-full w-full"
          />
          <div className="flex flex-col px-3 lg:px-6">
            <p className="pt-10 text-2xl font-semibold text-[#2D3748] lg:text-[28px]">
              Website Design for SCFC Canada
            </p>
            <p className="mt-[30px] text-sm font-normal text-[#4A5568]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>

            <div className=" mt-[60px] flex cursor-pointer items-center justify-end gap-1 pb-5 text-sm font-semibold">
              <p className="ReadMore">Read more</p>
              <img src="/images/arrow-right-s-line.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="mx-5 mt-20 grid grid-cols-1 rounded-3xl border bg-[#F1F2FF] md:mx-10 lg:grid-cols-2 xl:mx-[104px]">
          <img
            src="/images/Case-study__image3.png"
            alt=""
            className="h-full w-full"
          />
          <div className="flex flex-col px-3 lg:px-6">
            <p className="pt-10 text-2xl font-semibold text-[#2D3748] lg:text-[28px]">
              Website Design for SCFC Canada
            </p>
            <p className="mt-[30px] text-sm font-normal text-[#4A5568]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>

            <div className=" mt-[60px] flex cursor-pointer items-center justify-end gap-1 pb-5 text-sm font-semibold">
              <p className="ReadMore">Read more</p>
              <img src="/images/arrow-right-s-line.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="mx-5 mt-10 flex cursor-pointer items-center justify-end gap-3 pb-20 text-xl font-semibold xl:mx-[104px]">
          <p className="ReadMore">Read more case studies</p>
          <img src="/images/arrow-right-s-line.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
