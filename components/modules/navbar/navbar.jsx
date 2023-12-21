import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute z-50 w-full">
      <div className=" p-2 end-0 flex items-center md:justify-between justify-center py-2  text-black overflow-hidden">
        <div className="text-2xl font-extrabold">
          {/* NEXT-COFFEE */}
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/390/810/original/objects-about-coffee-for-logo-or-items-png.png"
            alt="logo"
            className="w-12 h-12"
          />
        </div>
        <div className="font-bold  grid grid-cols-6  md:gap-0 gap-6 ">
          <Link href="#" className="linksStyle">
            Home
          </Link>
          <Link href="#" className="linksStyle">
            About
          </Link>
          <Link href="#" className="linksStyle">
            Service
          </Link>
          <Link href="#" className="linksStyle">
            Menu
          </Link>
          <Link href="#" className="linksStyle">
            Pages
          </Link>
          <Link href="#" className="linksStyle">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
