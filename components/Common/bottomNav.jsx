import Heart from "../svg/heart";
import Home from "../svg/home";
import Link from "next/link";

export default function BoottomNav() {
  return (
    <section
      id="bottom-navigation"
      className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
    >
      <div id="tabs" className="flex justify-between">
        <Link
          href="/"
          className="flex w-full focus:text-teal-500 hover:text-teal-500 flex-col justify-center items-center  text-center pt-2 pb-1"
        >
          <div className="flex w-full focus:text-teal-500 hover:text-teal-500 flex-col justify-center items-center  text-center pt-2 pb-1">
            <Home />
            <span className="tab tab-whishlist block text-xs">Home</span>
          </div>
        </Link>
        <Link href="favourites">
          <div className="flex w-full focus:text-teal-500 hover:text-teal-500 flex-col justify-center items-center  text-center pt-2 pb-1">
            <Heart />
            <span className="tab tab-account block text-xs">Favourite</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
