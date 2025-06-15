import { FaRegHandPeace } from "react-icons/fa";
import Footer from "./footer";

export default function() {
  return (
    <div className="items-center flex flex-col h-screen justify-center text-center my-auto">
      <div className="flex-col justify-center text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold leading-none">
        <div className="flex justify-center-safe text-center">
          <div>INTERESTED IN</div>
          <div className="hidden my-auto sm:block md:text-[5rem] lg:text-[6rem] xl:text-[7rem]"><FaRegHandPeace /></div>
        </div>
        <div>WORKING TOGETHER?</div>
      </div>
      <a href={"mailto:shivakumarkotagiriofficial@gmail.com"}>
        <div className="mt-3 transform transition ease-in-out duration-400 hover:text-[#ff6f00] cursor-pointer">Contact me:</div>
      </a>
      <a href={"mailto:shivakumarkotagiriofficial@gmail.com"}>
        <div className="font-semibold transform transition ease-in-out duration-400 hover:text-[#ff6f00] cursor-pointer">shivakumarkotagiriofficial@gmail.com</div>
      </a>
    </div>
  )
}
