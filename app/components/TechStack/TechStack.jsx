"use client";
import React, { useState } from "react";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Backend"); // Initial active tab

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-[70px]">
        <img src="/images/Deco-line.svg" alt="" />
        <p className="mt-5 text-[35px] font-normal text-[#1A202C]">Our</p>
        <p className="text-[35px] font-bold text-[#1A202C]">Tech Stack</p>
      </div>

      <div className="mt-9 flex items-center justify-center gap-3 overflow-x-auto text-lg font-medium text-[#1A202C] lg:gap-6 xl:gap-[60px]">
        {[
          "Backend",
          "Frontend",
          "Databases",
          "CMS",
          "CloudTesting",
          "DevOps",
        ].map((tab) => (
          <p
            key={tab}
            className={`cursor-pointer font-semibold ${activeTab === tab ? "ReadMore text-blue-500" : "text-[#1A202C]"}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </p>
        ))}
      </div>

      <div className="mt-8 px-4 md:mt-16 md:px-16">
        {activeTab === "Backend" && (
          <>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 lg:grid-cols-5">
              <img src="/images/NodeJS.png" alt="" className="w-full" />
              <img src="/images/PHP.png" alt="" className="w-full" />
              <img
                src="/images/kisspng-mysqli-php-database-linux-coding-5ac4824a2e87e0 1.png"
                alt=""
                className="w-full"
              />
              <img src="/images/Java.png" alt="" className="w-full" />
              <img src="/images/NETCore.png" alt="" className="w-full" />
              <img src="/images/Python.png" alt="" className="w-full" />
              <img src="/images/RubyOnRails.png" alt="" className="w-full" />
              <img src="/images/Go.png" alt="" className="w-full" />
              <img src="/images/mon 1.png" alt="" className="w-full" />
            </div>
          </>
        )}
        {activeTab === "Frontend" && (
          <>
            <div className="mx-auto grid grid-cols-4">
              <img src="/images/angular.png" alt="" className=" w-[166px] " />
              <img src="/images/next.jpg" alt="" className=" w-[166px]" />
              <img src="/images/React.png" alt="" className=" w-[166px]" />
            </div>
          </>
        )}
        {activeTab === "Databases" && (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              <img
                src="/images/mongo.png"
                alt=""
                className=" w-full md:w-[166px]"
              />
              <img
                src="/images/kisspng-mysqli-php-database-linux-coding-5ac4824a2e87e0 1.png"
                alt=""
                className="w-full md:w-[166px]"
              />
            </div>
          </>
        )}
        {activeTab === "CMS" && (
          <>
            <img src="/images/cms.png" alt="" className="w-[166px]" />
          </>
        )}
        {activeTab === "CloudTesting" && (
          <>
            <img
              src="/images/cloud.jpg"
              alt=""
              className=" w-full md:w-[166px]"
            />
          </>
        )}
        {activeTab === "DevOps" && (
          <>
            <img src="/images/devops.png" alt="" className=" w-[166px]" />
          </>
        )}
      </div>

      <hr className="my-[90px] bg-[#E7DAED]" />
    </>
  );
};

export default TechStack;
