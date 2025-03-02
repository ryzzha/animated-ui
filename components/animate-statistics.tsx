"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import snapchatLogo from "../assets/images/snapchat-logo.png";

const avatars = [
  "https://upload.wikimedia.org/wikipedia/commons/7/74/Spotify_App_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  "https://www.vectorlogo.zone/logos/dropbox/dropbox-tile.svg",
  "https://www.vectorlogo.zone/logos/airbnb/airbnb-tile.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  snapchatLogo, 
  "https://www.vectorlogo.zone/logos/twitch/twitch-tile.svg"
];

export const AnimatedStatistics = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const [startScroll, setStartScroll] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("animated-section");
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;

      // Фіксуємо секцію при вході у в'юпорт
      if (scrollY >= sectionTop && startScroll === null) {
        setIsSticky(true);
        setStartScroll(scrollY);
      }

      // Якщо проскролили більше 850px від початкової точки – знімаємо фіксацію
      if (startScroll !== null && scrollY > startScroll + 1100) {
        setIsSticky(false);
        setHasScrolledPast(true);
      }

      // Якщо скролимо назад і повернулися вище початкової точки + 850px, фіксуємо назад
      if (startScroll !== null && scrollY < startScroll + 1100) {
        setIsSticky(true);
        setHasScrolledPast(false);
      }

      // Якщо повернулися повністю наверх, знімаємо фіксацію
      if (startScroll !== null && scrollY < sectionTop) {
        setIsSticky(false);
        setHasScrolledPast(false);
        setStartScroll(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startScroll]);

  return (
    <section
      id="animated-section"
      className={`w-full min-h-screen flex flex-col items-center justify-center border-2 border-red-500 ${
        isSticky && !hasScrolledPast ? "sticky top-0 left-0 w-full bg-white z-10" : "relative"
      }`}
    >
      {/* Аватарки, які рухаються */}
      <div className="absolute inset-0 flex flex-wrap gap-10 justify-around items-center">
        {avatars.map((avatar, index) => (
          <motion.div
            key={index}
            className="w-16 h-16 rounded-xl shadow-lg"
            animate={{ y: [0, 10, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
          >
            {typeof avatar === "string" ? (
              <img src={avatar} alt="Avatar" className="w-full h-full rounded-xl object-contain" />
            ) : (
              <Image src={avatar} alt="Avatar" className="w-full h-full rounded-xl object-contain" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Анімований блок */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <p className="text-lg text-gray-500">A growing library of</p>
        <h2 className="text-5xl font-bold">1,150 apps</h2>
        <h2 className="text-5xl font-bold">405,800 screens</h2>
        <h2 className="text-5xl font-bold">81,700 flows</h2>
      </motion.div>
    </section>
  );
};
