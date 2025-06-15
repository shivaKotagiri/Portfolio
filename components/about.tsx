"use client";

import { useEffect, useRef } from "react";
import { FaCode } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./skills";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const codeIconRef = useRef<HTMLDivElement>(null);

  const description =
    "I develop websites from front-end to back-end. My focus is on writing clean code that creates smooth user experiences. I'm passionate about learning new technologies and improving my craft.";

  const words = description.split(" ");

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

      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          x: -50,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });

        gsap.to(headingRef.current, {
          y: -10,
          duration: 2,
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
            y: 20,
            rotationX: -90,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.03,
            scrollTrigger: {
              trigger: descRef.current,
              start: "top 75%",
            },
          });
        }
      }

      if (codeIconRef.current) {
        gsap.set(codeIconRef.current, {
          rotationX: 5,
          rotationY: -10,
          rotationZ: 3,
        });

        gsap.to(codeIconRef.current, {
          rotationY: "+=360",
          duration: 6,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });

        gsap.to(codeIconRef.current, {
          scale: 1.02,
          duration: 5,
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
      className="flex lg:-translate-y-10 flex-col justify-around items-start min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden"
    >
      <div>
        <div
          ref={headingRef}
          className="text-start font-bold text-3xl md:text-4xl lg:text-5xl"
        >
          About
        </div>

        <div className="pt-3 lg:flex flex-col lg:flex-row lg:justify-between lg:items-start w-full gap-6 lg:gap-8">
          <div
            ref={descRef}
            className="text-3xl lg:text-4xl lg:max-w-4xl text-justify lg:text-left order-2 lg:order-1"
          >
            {words.map((word, index) => (
              <span key={index} className="inline-block">
                {word}&nbsp;
              </span>
            ))}
          </div>

          <div
            ref={codeIconRef}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
            className="flex pb-10 justify-center lg:justify-end w-full lg:w-auto order-1 lg:order-2 lg:mr-[10%] xl:mr-[8%]"
          >
            <FaCode
              size={200}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl translate-y-5 lg:-translate-y-8"
            />
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
}
