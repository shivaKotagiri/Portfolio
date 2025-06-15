"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FlipWords } from "../components/ui/flip-words";

export default function Hero() {
  const words = ["Modern", "Secure", "Scalable"];
  const headingRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const breathRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!headingRef.current || !subheadingRef.current) return;

    const words = headingRef.current.textContent?.split(" ") || [];

    headingRef.current.innerHTML = words
      .map((word) => {
        const chars = word.split("").map((char) =>
          `<span class="letter" style="display:inline-block;">${char}</span>`
        ).join("");
        return `<span class="word" style="display:inline-block; white-space: nowrap; margin-right: 0.3ch;">${chars}</span>`;
      })
      .join(" ");

    const letterSpans = headingRef.current.querySelectorAll(".letter");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      letterSpans,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.06 }
    );

    tl.fromTo(
      subheadingRef.current,
      { opacity: 0, scale: 0.95, rotation: -2 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.4)" },
      "-=0.7"
    );


    if (underlineRef.current) {
      tl.fromTo(
        underlineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          transformOrigin: "left center",
        },
        "-=0.5"
      );
    }

    if (breathRef.current) {
      gsap.to(breathRef.current, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: tl.duration(),
      });
    }
  }, []);

  return (
    <div className="flex flex-col text-center justify-center min-h-screen select-none">
      <div
        ref={headingRef}
        className="text-[25px] md:text-4xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight max-w-screen mx-auto text-center"
      >
        Hi, I'm Shiva Kumar Kotagiri
      </div>

      <div
        ref={subheadingRef}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-6 max-w-[90vw] tracking-wide"
      >
        Full Stack{" "}
        <span
          ref={underlineRef}
          className="relative inline-block font-semibold before:absolute before:left-0 before:-bottom-1 before:w-full before:h-1 before:bg-orange-500 before:origin-left before:scale-x-0 before:transition-transform before:ease-out"
          style={{ position: "relative" }}
        >
          Developer
        </span>{" "} &
        {" "}
        <span
          ref={breathRef}
          className="font-semibold"
          style={{ display: "inline-block" }}
        >
          Competitive Programmer
        </span>
        <div className="pt-3 text-4xl" style={{ display: "inline-block" }}>Building <FlipWords words={words} />Web applications <br /></div>
        <div className="text-base pt-2">
          <span className="font-semibold">Open to </span>
          <span className="font-extralight">new Job offers{" "}</span>
          <span className="bg-green-600 mx-2 px-2.5 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
