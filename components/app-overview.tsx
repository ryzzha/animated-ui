"use client";

import Image from "next/image";
import AppUIone from "../assets/images/app-ui-1.png";
import AppUItwo from "../assets/images/app-ui-2.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = {
  "1": AppUIone,
  "2": AppUItwo,
};

export const AppOverview = () => {
  const [currentImage, setCurrentImage] = useState<"1" | "2">("1");

  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentImage((prev) => (prev === "1" ? "2" : "1"));
    }, 3000);

    return () => {
      clearInterval(changeImage);
    };
  }, []);

  return (
    <section className="flex flex-col justify-end items-center bg-black p-28 pb-0 mx-32 inset-x-0 rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.1 }}
          transition={{ duration: 3 }}
          className=""
        >
          <Image alt="Mobbin App" src={images[currentImage]} className="rounded-tl-3xl rounded-tr-3xl" />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};


