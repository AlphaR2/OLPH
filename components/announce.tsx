"use client";

import React from "react";
import { BiSolidChurch } from "react-icons/bi";

const Announce = () => {
  const latest: any[] = [
    {
      name: "Mass",
      date: " 01/05/2024",
      text: "There will only be one mass (9am) for next sunday",
    },
    {
      name: "General",
      date: " 01/05/2024",
      text: "Exchange of pulpit will be next sunday. Please remeber to come prepared",
    },
    {
      name: "General",
      date: " 01/05/2024",
      text: "We will have rosary procession on friday (05/05/2024) time: 4pm",
    },
    {
      name: "General",
      date: " 01/05/2024",
      text: "CYON youth week commences tomorrow by 4pm with holy mass then retreat",
    },
    {
      name: "Welfare",
      date: " 01/05/2024",
      text: " OLPH care for sick will hold this week wednesday. Please time is 4pm",
    },
  ];

  return (
    <div className="flex flex-col gap-16 py-24 mb-16 w-full justify-center items-center ">
      <h1 className="inline-flex text-[#e2961b]  text-center text-sm  lg:text-2xl font-semibold py-3 px-6 m-2  mb-4">
        Announcement
      </h1>

      <div className="flex flex-col mx-4 gap-12 lg:px-4 py-6 lg:w-3/4 rounded-2xl bg-[#132a13]/40 shadow-lg">
        <div className="flex relative gap-4  lg:gap-12 items-center px-3 py-4 lg:p-6 border-b border-[#e2961b]/40 ">
          <span className="bg-[#e2961b] p-2 rounded-full text-xs lg:text-lg shadow-2xl">
            <BiSolidChurch />
          </span>

          <div className="flex flex-col gap-4">
            <h1 className=" text-xs lg:text-sm font-semi-bold text-[#ffe6cd]">
              {latest[0].name}
            </h1>
            <p className="text-xs lg:text-base font-semi-bold">
              {latest[0].text}
            </p>
          </div>
          <div className="absolute text-xs lg:text-sm font-semi-bold text-[#ffe6cd]  top-0 lg:top-3 right-3">
            Date: <span>{latest[0].date}</span>
          </div>
        </div>

        {/* 2 */}
        <div className="flex relative gap-4  lg:gap-12 items-center px-3 py-4 lg:p-6 border-b border-[#e2961b]/40 ">
          <span className="bg-[#e2961b] p-2 rounded-full text-xs lg:text-lg shadow-2xl">
            <BiSolidChurch />
          </span>

          <div className="flex flex-col gap-4">
            <h1 className=" text-xs lg:text-sm font-semi-bold text-[#ffe6cd]">
              {latest[1].name}
            </h1>
            <p className="text-xs lg:text-base font-semi-bold">
              {latest[1].text}
            </p>
          </div>
          <div className="absolute text-xs lg:text-sm font-semi-bold text-[#ffe6cd]  top-0 lg:top-3 right-3">
            Date: <span>{latest[1].date}</span>
          </div>
        </div>
        {/* 3 */}
        <div className="flex relative gap-4  lg:gap-12 items-center px-3 py-4 lg:p-6 border-b border-[#e2961b]/40 ">
          <span className="bg-[#e2961b] p-2 rounded-full text-xs lg:text-lg shadow-2xl">
            <BiSolidChurch />
          </span>

          <div className="flex flex-col gap-4">
            <h1 className=" text-xs lg:text-sm font-semi-bold text-[#ffe6cd]">
              {latest[2].name}
            </h1>
            <p className="text-xs lg:text-base font-semi-bold">
              {latest[2].text}
            </p>
          </div>
          <div className="absolute text-xs lg:text-sm font-semi-bold text-[#ffe6cd]  top-0 lg:top-3 right-3">
            Date: <span>{latest[2].date}</span>
          </div>
        </div>
        {/* 4 */}
        <div className="flex relative gap-4  lg:gap-12 items-center px-3 py-4 lg:p-6 0 ">
          <span className="bg-[#e2961b] p-2 rounded-full text-xs lg:text-lg shadow-2xl">
            <BiSolidChurch />
          </span>

          <div className="flex flex-col gap-4">
            <h1 className=" text-xs lg:text-sm font-semi-bold text-[#ffe6cd]">
              {latest[3].name}
            </h1>
            <p className="text-xs lg:text-base font-semi-bold">
              {latest[3].text}
            </p>
          </div>
          <div className="absolute text-xs lg:text-sm font-semi-bold text-[#ffe6cd]  top-0 lg:top-3 right-3">
            Date: <span>{latest[3].date}</span>
          </div>
        </div>
      </div>

      <button className="flex w-40 text-sm  font-semibold  justify-center  text-[#132a13] bg-[#e2961b]  p-2 pl-5 rounded-xl ">
        View More!
      </button>

      {/* <ul>
        {latest.map((item: any, index: any) => (
          <li>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Announce;
