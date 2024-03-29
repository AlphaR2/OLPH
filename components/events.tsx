"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import VideoThumb from "@/public/images/olph.ucth.jpg";
import Lion from "../public/images/olph.ucthL.jpg";
import Fr from "../public/images/olphFr.jpg";
import ModalVideo from "@/components/modal-video";
import { FaChurch, FaCross, FaPrayingHands } from "react-icons/fa";

import Link from "next/link";

export default function Events() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      <div
        className="absolute inset-0 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* illustration  */}
        <div
          className="absolute left-1/2  -top-12 transform -translate-x-1/2 -bottom-12 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="[#e2961b" offset="0%" />
                <stop stopColor="[#e2961b" offset="77.402%" />
                <stop stopColor="[#e2961b" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>
        <div className="pt-12 md:pt-20">
          {/* Section content */}
          <div className="md:grid items-center md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-24">
                <div className="inline-flex text-base md:text-base font-semibold py-3 px-6 m-2 text-white bg-[#e2961b] rounded-full mb-4">
                  OLPH EVENTS
                </div>
                <p className="text-xl py-10 text-white/60">
                  Discover OLPH's dynamic events calendar! From chapliancy
                  activities to spiritual retreats, explore and engage with our
                  diverse gatherings. Join us in fostering fellowship and
                  deepening faith. Welcome to OLPH's vibrant community!
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-[#ffe6cd]/80  shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-[#ffe6cd] border-transparent"
                  }`}
                  // link to each product
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-[#e2961b]  ">
                      Sunday Holy Mass
                    </div>
                    <div className="text-xs md:text-xl  font-medium leading-7 sm:text-base text-[#132a13] mb-4">
                      Join us live for our Sunday Solemn Mass, broadcasted from
                      the Church on our Youtube channel and Facebook page. Let's
                      come together as a community to worship and connect.
                    </div>
                    <button className="font-semibold text-xs md:text-xl  text-[#e2961b] hover:text-[#ffe6cd]">
                      View More...
                    </button>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-[#e2961b] rounded-full shadow flex-shrink-0 ml-3">
                    <FaChurch />
                  </div>
                </a>
                <a
                  className={`flex items-center gap-4 text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-[#ffe6cd]/80  shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-[#ffe6cd] border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-[#e2961b]  ">
                      Night of Divine Encounter
                    </div>
                    <div className="text-xs md:text-xl  font-medium leading-7 sm:text-base text-[#132a13] mb-4">
                      Join us every Friday by 6pm as we gather for Adoration and
                      the exposition of the Blessed Sacrament. Join us in
                      prayerful reflection and quiet reverence during this
                      sacred time
                    </div>
                    <button className="font-semibold text-xs md:text-xl  text-[#e2961b] hover:text-[#ffe6cd]">
                      View More...
                    </button>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-[#e2961b] rounded-full shadow flex-shrink-0 ml-3">
                    <FaCross />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-[#ffe6cd]/80  shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-[#ffe6cd] border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-[#e2961b]  ">
                      Weekly Activities with our Chaplain
                    </div>
                    <div className="text-xs md:text-xl  font-medium leading-7 sm:text-base text-[#132a13] mb-4">
                      Experience the weekly inspiration with our Chaplain! From
                      'Early Morning Whispers' to 'Prayer for the Week', join us
                      for a journey of community, growth, and joy.
                    </div>
                    <button className="font-semibold text-xs md:text-xl  text-[#e2961b] hover:text-[#ffe6cd]">
                      View More...
                    </button>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-[#e2961b] rounded-full shadow flex-shrink-0 ml-3">
                    <FaPrayingHands />
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none rounded-xl shadow-2xl drop-shadow-2xl  mx-auto "
                        src={VideoThumb}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none rounded-xl shadow-2xl drop-shadow-2xl  mx-auto "
                        src={Lion}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none rounded-xl shadow-2xl drop-shadow-2xl  mx-auto "
                        src={Fr}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
