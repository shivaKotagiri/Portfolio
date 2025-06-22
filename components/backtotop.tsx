"use client"

import { IoArrowUpSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function() {
  const router = useRouter();
  return (
      <small onClick={() => router.push("/#home") } className="cursor-pointer flex justify-center leading-3 text-center font-semibold transform transition ease-in-out duration-300 hover:text-[#ff6f00]">
          Back to top <span className="hidden sm:inline-block"><IoArrowUpSharp size={10} /></span>
      </small>
  )
}
