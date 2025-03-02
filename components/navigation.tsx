"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY > 700) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="sticky z-50 top-7 left-0 right-0 inset-x-0 bg-gray-300 bg-opacity-35 w-1/3 flex justify-between items-center px-5 p-3 max-w-5xl mx-auto rounded-full transition-all duration-500">
        <div className="flex items-center gap-1">
            <Logo /> 
            <span className="font-bold text-xl">Mobbin</span>
        </div>
        <div className="space-x-5 font-semibold flex items-center transition-all duration-500">
          <AnimatePresence>
            <motion.div 
                initial={{ x: 0 }} 
                exit={{ y: 10 }} 
                animate={{ x: scrolled ? -10 : 0 }} 
                transition={{ duration: 0.1 }}
                className="flex gap-5 items-center"
            >
                <a href="#" className="hover:opacity-85">Pricing</a>
                <a href="#" className="hover:opacity-85">Log in</a>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            {scrolled && (
              <motion.a 
                href="#" 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 10 }} 
                transition={{ duration: 0.5 }}
                className="bg-black hover:bg-black/85 text-white rounded-full px-3 py-2"
              >
                Join for free
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </nav>
    );
  };

  /*
<nav className="sticky top-7 left-0 right-0 inset-x-0 bg-gray-300 bg-opacity-35 w-1/3 flex justify-between items-center p-4 max-w-5xl mx-auto rounded-full transition-all duration-500">
        <motion.div 
          initial={{ x: 0 }} 
          animate={{ x: scrolled ? -50 : 0 }} 
          transition={{ duration: 0.5 }}
          className="font-bold text-xl"
        >
          Mobbin
        </motion.div>
        <div className="space-x-5 font-semibold flex items-center">
          <a href="#" className="">Pricing</a>
          <a href="#" className="">Log in</a>
          <motion.a 
            href="#" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 20 }} 
            transition={{ duration: 0.5 }}
            className="bg-black text-white rounded-full px-3 py-2"
          >
            Join for free
          </motion.a>
        </div>
      </nav>
  */