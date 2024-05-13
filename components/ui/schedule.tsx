import React from "react";

import Image from "next/image";

import schedule from "../../public/images/veil2.jpg";
import olph from "../../public/images/euchar.jpg";

const Schedule = () => {
  return (
    <section className="relative bg-[#ffe6cd]">
      <div className="flex flex-col gap-16 py-16 w-full justify-center items-center ">
        <h1 className="inline-flex text-[#e2961b]  text-center text-sm  lg:text-2xl font-semibold py-3 px-6 m-2  mb-4">
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
        className="flex flex-col w-full h-[800px]"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-anchor="[data-aos-id-blocks]"
      >
        <div className=" relative pb-10">
          <Image
            className=" flex object-cover lg:object-fill relative h-[550px] my-20"
            src={schedule}
            alt="veil"
          />

          <div className="absolute h-[550px] w-full lg:rounded-2xl top-20 bg-[#ffe6cd]/70 ">
            <div className="flex w-full relative flex-col gap-6 p-6 pr-40 ">
              <div className="flex w-full absolute top-28  ">
                <Image
                  className="relative object-cover  w-[450px] h-80 rounded-3xl shadow-2xl hidden lg:flex "
                  src={olph}
                  alt="olph"
                />
              </div>

              <div className="lg:w-[450px] absolute lg:left-2/3 mb-12  mt-10  flex flex-col  text-center  rounded-xl  gap-12 text-[#132a13] border-2 border-[#805e27]/50 shadow-2xl p-6 lg:px-8 lg:py-6">
                <h3 className="  lg:text-lg font-black  text-[#805e27] ">
                  {" "}
                  Holy Mass Schedule
                </h3>

                <div className="flex justify-between  gap-24">
                  <ul className="flex flex-col gap-8  ">
                    <li className="flex text-sm lg:text-base leading-7 ">
                      Sunday{" "}
                    </li>
                    <li className="flex text-sm lg:text-base leading-7 ">
                      Sunday
                    </li>
                    <li className="flex text-sm lg:text-base leading-7 ">
                      Sunday
                    </li>
                    <li className="flex text-sm lg:text-base leading-7 ">
                      Monday - Thursday
                    </li>
                    <li className="flex text-sm lg:text-base leading-7 ">
                      {" "}
                      Fridays
                    </li>
                    <li className="flex text-sm lg:text-base leading-7 ">
                      {" "}
                      Saturdays
                    </li>
                  </ul>
                  {/* /////////// */}
                  <ul className="flex flex-col gap-8">
                    <li className="flex text-sm lg:text-base leading-7 font-semibold">
                      7 am
                    </li>
                    <li className="flex text-sm lg:text-base leading-7 font-semibold">
                      9:30 am
                    </li>
                    <li className="flex text-sm lg:text-base leading-7 font-semibold">
                      5:30 pm
                    </li>
                    <li className="flex text-sm lg:text-base leading-7 font-semibold">
                      12 Noon
                    </li>
                    <li className="flex text-sm lg:text-base leading-7 font-semibold">
                      {" "}
                      6 pm
                    </li>
                    <li className="flex text-sm lg:text-base leading-7 font-bold">
                      {" "}
                      7 am
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
