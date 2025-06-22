
import Link from "next/link";
import Backtotop from "./backtotop";

export default function() {

  return (
    <div className="flex px-7 md:px-10 lg:px-15 xl:px-25 justify-between w-full text-xs md:text-sm">
      <div className="font-semibold flex flex-col">
        <small>Design & Developed by</small>
        <small>ShivaKumarKotagiri</small>
      </div>
      <div className="flex justify-center items-center px-2">
        <div className="flex justify-center text-center font-semibold text-xs gap-2 sm:gap-3 sm:text-base  md:gap-10">
          <Link target="_blank" href={"https://github.com/shivaKotagiri"} className="cursor-pointer transform transition ease-in-out duration-300 hover:text-[#ff6f00]">Github</Link>
          <Link target="_blank" href={"https://linkedin.com/in/kotagiri-shiva-670330288"} className="cursor-pointer transform transition ease-in-out duration-300 hover:text-[#ff6f00]">LinkedIn</Link>
          <Link target="_blank" href={"https://x.com/ShivaKumar403"} className="cursor-pointer transform transition ease-in-out duration-300 hover:text-[#ff6f00]">Twitter</Link>
        </div>
      </div>
      <div className="text-center flex flex-col">
        <small>&#169;-All Rights Reserved</small>
        <Backtotop />
      </div>
    </div>
  )
}
