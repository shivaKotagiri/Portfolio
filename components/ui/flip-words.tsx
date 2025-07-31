"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <div ref={containerRef} className="inline-block relative">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
            // Removed: filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            // Removed: filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -30,
            x: 20,
            scale: 1.2,
            // Removed: filter: "blur(8px)",
            rotateX: 90,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 1,
          }}
          className={cn(
            "inline-block relative z-10 font-bold",
            className
          )}
          key={currentWord}
        >
          {/* Glowing background effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            exit={{ scale: 1.2, opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-red-500/30 to-purple-600/30 blur-xl rounded-lg -z-10"
          />
          
          {currentWord.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${currentWord}-${letterIndex}`}
              initial={{ 
                opacity: 0, 
                y: 20, 
                scale: 0.5,
                // Removed: filter: "blur(8px)",
                rotateY: -90
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                // Removed: filter: "blur(0px)",
                rotateY: 0
              }}
              transition={{
                delay: letterIndex * 0.05,
                duration: 0.4,
                type: "spring",
                stiffness: 120,
                damping: 12
              }}
              className="inline-block transform-gpu"
              style={{
                textShadow: "0 2px 10px rgba(251, 146, 60, 0.3)"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-orange-400/60 rounded-full"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={{
              y: [-5, 5, -5],
              x: [-3, 3, -3],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};