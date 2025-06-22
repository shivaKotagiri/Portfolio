"use client"
import { useEffect, useRef } from "react";
import { FaStarOfLife } from "react-icons/fa";
import gsap from "gsap";
import Image from "next/image";
import ProjectCard from "./ui/projectcard";
import info from "../lib/projectinfo";

export default function() {
  const bigMyRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      if (sectionRef.current) {
        gsap.from(sectionRef.current, {
          opacity: 0,
          y: 50,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      if (bigMyRef.current) {
        gsap.from(bigMyRef.current, {
          opacity: 0,
          y: -50,
          scale: 0.9,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bigMyRef.current,
            start: "top 80%",
          },
        });
      }

      if (projectsRef.current) {
        const children = Array.from(
          projectsRef.current.children
        ) as HTMLElement[];

        gsap.from(children, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen lg:-translate-y-20">
      <div className="pb-10">
          <h1 ref={bigMyRef} className="text-[45px] text-center sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-extrabold leading-none mt-8 sm:mt-12 md:mt-16 lg:mt-20 select-none">
          Featured Work
        </h1>
      </div>
      <div className="flex-col items-center justify-center">
        <ProjectCard info = {info.project[2]} />
        <div className=" grid lg:max-w-[87%] mx-auto grid-cols-1 lg:grid-cols-2 lg:gap-5 py-10">
          <div className="py-10 lg:py-0"><ProjectCard info = {info.project[0]} /></div>
          <div><ProjectCard info = {info.project[1]} /></div>
        </div>
        <ProjectCard info = {info.project[3]} />
      </div>
    </div>
  )
}
