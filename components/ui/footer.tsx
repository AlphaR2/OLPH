import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo2.png";

export default function Footer() {
  return (
    <footer className="border-t-2 pt-24  px-4  border-[#ffe6cd]/40">
      <div className="">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center  sm:px-6 lg:gap-28">
          {/* ///////// */}

          <div className="flex md:hidden ">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <div className="flex gap-2 items-center">
                <Image
                  className=" w-36 md:w-16 md:h-14"
                  src={logo}
                  alt="logo"
                />
              </div>
            </Link>
          </div>

          {/* ///////// */}

          {/* Top area: Blocks */}
          <div className="flex gap-8 lg:gap-20 mb-8 mx-6 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5 ">
              <div className="flex gap-2 items-center">
                <div className="hidden md:flex shrink-0 mr-4">
                  {/* Logo */}
                  <Link href="/" className="block" aria-label="Cruip">
                    <div className="flex gap-2 items-center">
                      <Image
                        className=" w-9 md:w-16 md:h-14"
                        src={logo}
                        alt="logo"
                      />
                      <h1 className="text-xl font-bold text-white ">OLPH</h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex text-justify mt-6 lg:w-5/6 text-sm leading-7 md:text-lg">
                Thank you for visiting OLPH, where hearts unite in faith and
                fellowship. Join us in worship and community as we journey
                together in the light of love and grace.
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between mr-6">
            {/* Social links */}
            <ul className="flex gap-4 mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-black bg-[#ffe6cd] hover:bg-[#ffb703]  rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>

              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-black bg-[#ffe6cd] hover:bg-[#ffb703]  rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center  text-black bg-[#ffe6cd] hover:bg-[#ffb703]  rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyrights note */}

        <p className="flex my-6 mx-2 lg:mx-0 w-full justify-center items-center text-sm text-white/70">
          &copy; 2024 Our Lady of Perpetual Help Catholic Chaplaincy.
        </p>
      </div>
    </footer>
  );
}
