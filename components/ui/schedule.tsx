import React from "react";

import Image from "next/image";

import schedule from "../../public/images/veil2.jpg";
import olph from "../../public/images/euchar.jpg";

const Schedule = () => {
  return (
    <section className="relative bg-[#ffe6cd]">
      <div className="flex flex-col gap-16 py-16 w-full justify-center items-center ">
        <h1 className="inline-flex text-[#132a13]  bg-[#e2961b] rounded-full text-center text-sm  lg:text-base font-semibold py-3 px-6 m-2  mb-4">
          JOIN US
        </h1>

        <p className="items-center text-justify lg:text-center text-sm lg:text-lg mx-auto px-4 sm:px-6 max-w-6xl leading-7 lg:leading-10  text-[#132a13]">
          {" "}
          Gather as one family in worship, united in spirit and faith. Our
          chaplaincy is a home that brings all spiritual sustainance, from the
          solemnity of weekly masses to other weekly activities, igniting the
          flames of spiritual growth within you. At OLPH, we extend a heartfelt
          welcome to all members of our worshipping community, inviting you to
          find solace and strength within our diverse pious societies and
          groups.
        </p>
      </div>

      {/* <div >
        OLPH EVENTS
      </div> */}
      <div
        className="flex flex-col w-full"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-anchor="[data-aos-id-blocks]"
      >
        <div className=" relative pb-10">
          <Image
            className=" flex object-cover lg:object-fill relative h-[450px] my-20"
            src={schedule}
            alt="veil"
          />

          <div className="absolute h-[450px] w-full lg:rounded-2xl top-20 bg-[#ffe6cd]/80 ">
            <div className="flex w-full relative  flex-col gap-6 p-6 pr-40 ">
              <div className="flex w-full absolute top-14 ml-12 ">
                <Image
                  className="relative object-cover  w-[450px] h-80 rounded-3xl shadow-2xl hidden lg:flex "
                  src={olph}
                  alt="olph"
                />
              </div>

              <div className="w-full absolute lg:left-2/3 mb-12 mt-4  flex flex-col  rounded-xl  gap-2 text-[#132a13] ">
                <h3 className="  lg:text-xl font-black "> Holy Mass Schedule</h3>

                <span className="border-b-2  border-[#132a13]/20 w-64 lg:w-72 pb-8 mb-6"></span>
                <div className="flex gap-24">
                  <ul className="flex flex-col gap-8  ">
                    <li className="flex text-sm lg:text-lg leading-7 ">
                      Sunday{" "}
                    </li>
                    <li className="flex text-sm lg:text-lg leading-7 ">
                      Sunday
                    </li>
                    <li className="flex text-sm lg:text-lg leading-7 ">
                      Sunday
                    </li>
                    <li className="flex text-sm lg:text-lg leading-7 ">
                      Monday-Friday
                    </li>
                    <li className="flex text-sm lg:text-lg leading-7 ">
                      {" "}
                      Saturdays
                    </li>
                  </ul>
                  {/* /////////// */}
                  <ul className="flex flex-col gap-8">
                    <li className="flex text-sm lg:text-base leading-7 font-bold">
                      7 AM
                    </li>
                    <li className="flex text-sm lg:text-lg leading-7 font-bold">
                      9:30 AM
                    </li>
                    <li className="flex text-sm lg:text-lg leading-7 font-bold">
                      5:30 PM
                    </li>
                    <li className="flex text-sm lg:text-lg leading-7 font-bold">
                      {" "}
                      12 PM
                    </li>
                    <li className="flex text-sm lg:text-lg leading-7 font-bold">
                      {" "}
                      7:30 AM
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
