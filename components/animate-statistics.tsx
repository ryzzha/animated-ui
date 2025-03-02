"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const avatars = [
  "https://upload.wikimedia.org/wikipedia/commons/7/74/Spotify_App_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/69/Notion-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/63/Dropbox_Logo_02.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3d/Airbnb_logo_Bélo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Klarna_Payment_Badge.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/33/Threads_app_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bf/Revolut_logo.svg"
];

export const AnimatedStatistics = () => {
  const controls = useAnimation();
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Якщо проскролили 1450px, фіксуємо секцію
      if (scrollY >= 1450 && scrollY <= 1950) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      // Додаємо новий абзац кожні 100px після 1450px
      if (scrollY >= 1450 && scrollY <= 1950 && scrollY - lastScrollY >= 100) {
        setParagraphs((prev) => [...prev, `Новий абзац ${prev.length + 1}`]);
        setLastScrollY(scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Аватарки, які рухаються */}
      <div className="absolute inset-0 flex flex-wrap gap-10 justify-around items-center">
        {avatars.map((avatar, index) => (
          <motion.img
            key={index}
            src={avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-full shadow-lg"
            animate={{ y: [0, 10, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
          />
        ))}
      </div>

      {/* Анімований блок */}
      <motion.div
        className={`relative z-10 text-center ${
          isFixed ? "fixed top-10 left-1/2 transform -translate-x-1/2" : "relative"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <p className="text-lg text-gray-500">A growing library of</p>
        <h2 className="text-5xl font-bold">1,150 apps</h2>
        <h2 className="text-5xl font-bold">405,800 screens</h2>
        <h2 className="text-5xl font-bold">81,700 flows</h2>
      </motion.div>

      {/* Динамічно додані абзаци */}
      <div className="mt-80 flex flex-col gap-4">
        {paragraphs.map((text, index) => (
          <p key={index} className="text-lg text-gray-700">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};
