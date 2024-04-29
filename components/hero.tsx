"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

export default function Hero() {
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    let int = setInterval(() => {
      setPage((prev) => (prev + 1 >= 8 ? 1 : prev + 1));
    }, 20000);

    return () => clearInterval(int);
  }, []);

  return (
    <section>
      <div className="relative flex flex-col w-screen">
        <div className="w-full relative">
          {/* <div className="absolute top-12 justify-center items-center lg:top-12 border  border-white/20 w-[600px] lg:w-[1486px] h-[350px] lg:h-[517px] ml-6">
            <p className="flex w-full h-full justify-center  items-center font-bold md:text-4xl text-2xl">
              Making Family Out of Strangers
            </p>
          </div> */}
          <Image
            src={`/images/${page}.jpg`}
            alt="hero-image"
            className="w-full border-b-2 border-t-2 border-[#ffe6cd] h-[450px] md:h-[500px]"
            width={1400}
            height={400}
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

// data-aos="fade-up" data-aos-delay="200"
