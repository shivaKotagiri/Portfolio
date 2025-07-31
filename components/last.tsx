import { FaRegHandPeace } from "react-icons/fa";
import Footer from "./footer";
import Particles from "./ui/particles";

export default function ContactSection() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
      <Particles /> 
      <div className="z-10 flex flex-col justify-center text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold leading-none">
        <div className="flex justify-center text-center">
          <div>INTERESTED IN</div>
          <div className="hidden my-auto sm:block md:text-[5rem] lg:text-[6rem] xl:text-[7rem]">
            <FaRegHandPeace />
          </div>
        </div>
        <div>WORKING TOGETHER?</div>
      </div>
      <a href={"mailto:shivakumarkotagiriofficial@gmail.com"}>
        <div className="mt-3 transform transition ease-in-out duration-400 hover:text-[#ff6f00] cursor-pointer z-10">
          Contact me:
        </div>
      </a>
      <a href={"mailto:shivakumarkotagiriofficial@gmail.com"}>
        <div className="font-semibold transform transition ease-in-out duration-400 hover:text-[#ff6f00] cursor-pointer z-10">
          shivakumarkotagiriofficial@gmail.com
        </div>
      </a>
    </div>
  );
}
