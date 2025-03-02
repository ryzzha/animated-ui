"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {avatars} from "../shared/constants";

const getRandomRange = (min: number, max: number) => Math.random() * (max - min) + min;

const textBlocks = [
  "A growing library of",
  "1,150 apps",
  "405,800 screens",
  "81,700 flows"
];

export const AnimatedStatistics = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const [startScroll, setStartScroll] = useState<number | null>(null);
  const [isScattered, setIsScattered] = useState(false);
  const [visibleTextIndex, setVisibleTextIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("animated-section-2");
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;

      console.log("sectionTop - " + sectionTop);
      console.log("scrollY - " + scrollY);

      if (scrollY >= sectionTop && startScroll === null) {
        setIsSticky(true);
        setStartScroll(scrollY);
        setIsScattered(true);
      }

      if (startScroll !== null) {
        const scrolledDistance = scrollY - startScroll;
        const newIndex = Math.floor(scrolledDistance / 100); 

        if (newIndex !== visibleTextIndex && newIndex >= 0 && newIndex <= textBlocks.length) {
          setVisibleTextIndex(newIndex);
        }
      }

      if (scrollY < sectionTop) {
        setStartScroll(null);
        setVisibleTextIndex(0);
      }

      if (startScroll !== null && scrollY > startScroll + 1450) {
        setIsSticky(false);
        setHasScrolledPast(true);
        setVisibleTextIndex(0); 
      }

      if (startScroll !== null && scrollY < startScroll + 1450) {
        setIsSticky(true);
        setHasScrolledPast(false);
      }

      if (startScroll !== null && scrollY < sectionTop) {
        setIsSticky(false);
        setHasScrolledPast(false);
        setStartScroll(null);
        setIsScattered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startScroll]);

  return (
    <div className={`h-[1600px] w-full ${isSticky && startScroll ?  "justify-start" : "justify-end"} flex flex-col justify-end relative`}>
      <section
        id="animated-section-2"
        className={`w-full min-h-screen flex flex-col items-center justify-center  ${
          isSticky && !hasScrolledPast ? "sticky top-0 left-0 w-full bg-white z-10" : "relative bottom-0"
        }`}
      >
        <div className="absolute inset-0 flex flex-wrap gap-10 justify-center items-center">
          {avatars.map((avatar, index) => {
            const scatterX = getRandomRange(-800, 800); 
            const scatterY = getRandomRange(-350, 350); 

            const moveX = getRandomRange(-30, 30); 
            const moveY = getRandomRange(-30, 30);

            return (
              <motion.div
                key={index}
                className="absolute w-20 h-20 rounded-xl shadow-lg"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={
                  isScattered
                    ? { 
                        x: [0, scatterX, scatterX + moveX, scatterX - moveX, scatterX], 
                        y: [0, scatterY, scatterY + moveY, scatterY - moveY, scatterY],
                        opacity: 1
                      }
                    : { x: 0, y: 0, opacity: 1 }
                }
                transition={{
                  duration: isScattered ? 3 : 0, 
                  ease: "easeOut",
                  repeat: isScattered ? Infinity : 0,
                  repeatType: "loop",
                  delay: index * 0.1
                }}
              >
                {typeof avatar === "string" ? (
                  <img src={avatar} alt="Avatar" className="w-full h-full rounded-xl object-contain" />
                ) : (
                  <Image src={avatar} alt="Avatar" className="w-full h-full rounded-xl object-contain" />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center gap-3">
          {textBlocks.map((text, index) => (
            <motion.h2
              key={index}
              className={`text-7xl font-bold ${index === 0 ? "text-lg font-semibold" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={
                index < visibleTextIndex
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 } 
              }
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
            >
              {text}
            </motion.h2>
          ))}
        </div>
      </section>
    </div>
  );
};
