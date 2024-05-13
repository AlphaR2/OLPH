import Image from "next/image";
import mass from "../public/images/chalice.png";
import schedule from "../public/images/veil2.jpg";
import Link from "next/link";

export default function Features() {
  return (
    <section>
      <div className="w-full">
        <div className="">
          {/* Section header */}
          <div
            className="flex flex-col items-center mx-auto px-4 sm:px-6 max-w-6xl pt-20 "
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-anchor="[data-aos-id-blocks]"
          >
            <p className="flex text-sm lg:text-2xl mb-4 text-center font-bold  text-white border-t-2 border-b-2 border-[#e2961b] p-4">
              "Now, no longer strangers, but fellow citizens with the saints,
              part of God's household."
            </p>
            <h3 className="flex justify-end text-sm lg:text-lg p-1  w-full font-black text-[#e2961b] border-r-2 mr-3 border-[#e2961b]">
              EPH 2:19
            </h3>
          </div>

          <div className="border-b  pb-14  border-[#ffe6cd]/10"></div>

          {/* bg-[#132a13] */}

          {/* CTA ONLINE ACTIVITIES VIEW */}

          <div className="flex   flex-col lg:flex-row  text-black gap-4 lg:gap-14 my-20 lg:my-32 py-2 lg:py-12  bg-[#ffe6cd] mx-4   lg:mx-20 px-2 lg:px-14 rounded-lg ">
            <div className="lg:hidden">
              <Image
                className="w-[840px] h-72 rounded-2xl shadow-2xl"
                src={mass}
                alt="mass-image"
              />
            </div>
            <div className="flex flex-col gap-6 lg:w-[520px]  mt-4">
              <h1 className="text-base lg:text-xl text-[#132a13] font-semibold">
                Sunday Holy Mass Live!
              </h1>
              <p className=" text-[#132a13] text-sm flex leading-8 lg:text-lg ">
                Welcome to OLPH, a sanctuary where strangers become family. Step
                into our serene space of faith and fellowship, where all are
                cherished. Experience today's holy mass live as we gather in
                worship. Let's journey together in faith and love
              </p>
              <button className="flex w-40 lg:text-lg text-white font-semibold  bg-[#e2961b] p-2 pl-5 rounded-xl ">
                <a href="https://youtube.com/@frbekomson?si=N4rrYVxXtNBzBsLa">
                  Stream Live!
                </a>
              </button>
            </div>

            <div className="hidden lg:flex">
              <Image
                className="w-[840px] h-72 rounded-2xl shadow-2xl"
                src={mass}
                alt="mass-image"
              />
            </div>
          </div>

          <div className="border-b  pb-16  border-[#ffe6cd]/10"></div>
        </div>
      </div>
    </section>
  );
}
