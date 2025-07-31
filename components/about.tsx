"use client";

import { useEffect, useRef } from "react";
import { FaCode } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "./ui/themeprovider";
import Particles from "./ui/particles";
import Skills from "./skills";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const codeIconRef = useRef<HTMLDivElement>(null);
  const { lightMode } = useTheme();

  const description =
    "I develop websites from front-end to back-end. My focus is on writing clean code that creates smooth user experiences. I'm passionate about learning new technologies and improving my craft.";
  const words = description.split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from(sectionRef.current, {
          opacity: 0,
          y: 100,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          x: -100,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });

        gsap.to(headingRef.current, {
          y: -8,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      if (descRef.current) {
        const wordSpans = descRef.current.querySelectorAll("span");
        if (wordSpans.length) {
          gsap.from(wordSpans, {
            opacity: 0,
            y: 30,
            rotationX: -90,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.04,
            scrollTrigger: {
              trigger: descRef.current,
              start: "top 75%",
            },
          });
        }
      }

      if (codeIconRef.current) {
        gsap.set(codeIconRef.current, {
          rotationX: 10,
          rotationY: -15,
          rotationZ: 5,
        });

        gsap.to(codeIconRef.current, {
          rotationY: "+=360",
          duration: 8,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });

        gsap.to(codeIconRef.current, {
          scale: 1.05,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center items-start min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      {/* Background particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Heading */}
        <div className="mb-8">
          <div
            ref={headingRef}
            className="text-start font-bold text-4xl md:text-5xl lg:text-7xl"
          >
            About Me
          </div>
          <div
            className={`h-1 w-24 ${
              lightMode ? "bg-black" : "bg-white"
            } bg-primary rounded-full mt-4`}
          />
        </div>

        {/* Content */}
        <div className="lg:flex flex-col lg:flex-row lg:justify-between lg:items-center w-full gap-8 lg:gap-12">
          {/* Description */}
          <div
            ref={descRef}
            className={`text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-wide ${
              lightMode ? "text-neutral-800" : "text-neutral-200"
            }`}
          >
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-colors duration-300 ${
                  lightMode ? "hover:text-orange-600" : "hover:text-gray-100"
                }`}
              >
                {word}&nbsp;
              </span>
            ))}
          </div>

          {/* Icon */}
          <div className="lg:flex-shrink-0 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={codeIconRef}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              <FaCode
                size={240}
                className="relative mt-7 lg:-translate-y-2.5 text-8xl md:text-9xl lg:text-[12rem]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-25 w-full mx-auto">
        <Skills />
      </div>
    </section>
  );
}
