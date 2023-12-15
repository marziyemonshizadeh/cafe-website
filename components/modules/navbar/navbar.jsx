import Link from "next/link";
import Header from "../header/header";

export default function Navbar() {
  return (
    <>
      <div className="flex md:justify-between justify-start py-2 bg-amber-950 text-slate-100 overflow-hidden">
        <div className="text-2xl font-extrabold">NEXT-COFFEE</div>
        <div>
          <div className="font-bold invisible md:visible xl:visible">
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
          {/* <div className="visible md:invisible xl:invisible">...</div> */}
        </div>
      </div>
      <Header />
    </>
  );
}
