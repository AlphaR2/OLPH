import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import logo from "../../public/images/logo2.png";

export default function Header() {
  return (
    <header className=" w-full h-20 z-30">
      <div className="flex h-20 max-w-full px-1 sm:px-6">
        <div className="flex w-full items-center justify-between mx-4 md:mx-0">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/events"
                  className="font-bold md:text-lg text-white  hover:text-[#ffb703]  px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="btn-sm md:text-lg font-bold text-white  hover:text-[#ffb703]  ml-3"
                >
                  News
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
