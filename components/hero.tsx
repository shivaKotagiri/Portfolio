"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FlipWords } from "./ui/flip-words";
import { useTheme } from "./ui/themeprovider";  // Update path based on your file structure
import Particles from "./ui/particles";

export default function Hero() {
  const words = ["Modern", "Secure", "Scalable", "Responsive", "Interactive"];
  const { lightMode } = useTheme(); // Use the theme hook
  
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Enhanced typewriter effect with cursor
    const heading = headingRef.current;
    if (heading) {
      const text = heading.textContent || "";
      heading.innerHTML = "";
      
      text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.opacity = "0";
        span.style.transform = "translateY(20px)";
        heading.appendChild(span);
      });
      const chars = heading.querySelectorAll("span");
      
      // Container fade in
      tl.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8 }
      )
      // Typewriter with bounce effect
      .to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.1,
        stagger: 0.03,
        ease: "back.out(1.2)"
      })
      // Subtitle with staggered word animation
      .fromTo(
        subtitleRef.current?.children || [],
        { opacity: 0, y: 30, rotateX: -15 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "back.out(1.3)" 
        },
        "-=0.8"
      )
      // Status badge with 3D flip
      .fromTo(
        statusRef.current,
        { 
          opacity: 0, 
          scale: 0.5, 
          rotateY: -90,
          transformStyle: "preserve-3d"
        },
        { 
          opacity: 1, 
          scale: 1, 
          rotateY: 0,
          duration: 0.8, 
          ease: "back.out(1.5)" 
        },
        "-=0.4"
      );
    }

    // Floating particles animation
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      Array.from(particles).forEach((particle, i) => {
        gsap.to(particle, {
          y: "random(-20, 20)",
          x: "random(-15, 15)",
          rotation: "random(-180, 180)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5
        });
      });
    }

    // Enhanced floating animation
    gsap.to(containerRef.current, {
      y: -8,
      rotation: 0.5,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });

    // Pulsing glow effect for status badge
    gsap.to(statusRef.current, {
      boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [lightMode]); // Add lightMode to dependencies

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none">
        
        
        {/* Floating particles */}
        <Particles />
        </div>

      <div ref={containerRef} className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        {/* Enhanced main heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 sm:mb-10 leading-tight tracking-tight"
          style={{
            textShadow: lightMode 
              ? "0 4px 20px rgba(59, 130, 246, 0.2)" 
              : "0 4px 20px rgba(59, 130, 246, 0.3)"
          }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent relative">
            Shiva Kumar
          </span>
        </h1>

        {/* Enhanced subtitle */}
        <div ref={subtitleRef} className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl perspective-1000">
            <span className="inline-block font-bold bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
              Full Stack Developer
            </span>
            <span className={`mx-3 text-2xl ${
              lightMode ? 'text-gray-500' : 'text-gray-400'
            }`}>&</span>
            <span className="inline-block font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
              Competitive Programmer
            </span>
          </div>
          
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            <span className={lightMode ? 'text-gray-700' : 'text-gray-300'}>Crafting </span>
            <FlipWords 
              words={words} 
              duration={2500}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg" 
            />
            <span className={lightMode ? 'text-gray-700' : 'text-gray-300'}> Digital Experiences</span>
          </div>
        </div>
        
        {/* Enhanced status badge */}
        <div 
          ref={statusRef}
          className={`inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-emerald-400/10 to-blue-500/10 backdrop-blur-xl border border-emerald-400/20 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-110 hover:rotate-1 group cursor-pointer ${
            lightMode ? 'hover:shadow-emerald-500/40' : ''
          }`}
        >
          <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Available for Opportunities
          </span>
          <div className="relative">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-lg group-hover:shadow-emerald-400/50 animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full animate-ping opacity-60" />
            <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-300 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}