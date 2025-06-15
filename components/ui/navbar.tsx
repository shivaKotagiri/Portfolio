"use client";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "./themeprovider";
import { useRouter } from "next/navigation";
// import Scrolldown from "./scrolldown";

export default function Navbar() {
  const router = useRouter();
  const { lightMode, toggleLightMode } = useTheme();

  return (
    <div className={`fixed top-0 left-0 w-full px-10 py-3 border-gray-500 flex justify-between items-center z-10 transition-colors duration-500 ${lightMode ? "bg-[#FFFCF3] text-black" : "bg-black text-white"}`}>
      <div onClick={() => router.push("/#home")} className="cursor-pointer font-semibold text-2xl transform transition ease-in-out duration-200 hover:text-[#ff6f00]">Portfolio</div>
      <div className="flex justify-between items-center">
        <div
          onClick={toggleLightMode}
          className={`cursor-pointer p-2 rounded-full`}
        >
          {lightMode ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
        </div>
        <div className="flex items-center">
          <div onClick={() => router.push("/resume")} className={`cursor-pointer py-2 md:px-4 rounded-xl text-md transform transition ease-in-out duration-200 hover:text-[#ff6f00]`}>
            Resume
          </div>
          <div className={`cursor-pointer text-md py-2 px-3 rounded-lg transform transition ease-in-out duration-200 hover:text-[#ff6f00]`}>
            About
          </div>
          <div onClick={() => router.push("/#contact")} className="cursor-pointer text-md md:px-3 py-2 rounded-lg transform transition ease-in-out duration-200 hover:text-[#ff6f00]">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}
