import Image from "next/image"
import Resume from "@/public/assets/Resume.jpg"

export default function() {
  return (
    <div className="relative h-full w-full">
      <Image src={Resume} alt="Resume" fill className="object-contain pb-10 pt-16" priority />
    </div>
  )
}
