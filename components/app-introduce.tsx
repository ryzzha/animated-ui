"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {avatars} from "../shared/constants";

const companies = ["Uber", "headspace", "Meta", "airbnb", "Revolut", "Metalab", "Pinterest"];

export const AppIntroduce = () => {
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % avatars.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-1/2 flex flex-col justify-between items-center py-20"
        >
            <div className="text-center relative">
                <div className="flex justify-center py-5 relative">
                    <motion.div
                        className="absolute top-1 w-[60px] h-[60px] rounded-xl bg-gray-100 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.7, y: -5 }}
                        exit={{ opacity: 0, scale: 0.7, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    <motion.div
                        className="absolute top-3 w-[70px] h-[70px] rounded-xl bg-gray-200 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.7, y: -5 }}
                        exit={{ opacity: 0, scale: 0.7, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    <motion.div
                        className="relative z-10 w-20 h-20 rounded-xl bg-white shadow-lg"
                        key={currentLogoIndex} 
                        initial={{ opacity: 0, scale: 0.7, y: -5 }}
                        exit={{ opacity: 0, scale: 0.7, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {typeof avatars[currentLogoIndex] === "string" ? (
                            <img src={avatars[currentLogoIndex]} alt="Avatar" className="w-full h-full rounded-xl object-contain" />
                            ) : (
                            <Image src={avatars[currentLogoIndex]} alt="Avatar" className="w-full h-full rounded-xl object-contain" />
                        )}
                    </motion.div>
                </div>
                <h1 className="text-7xl font-semibold">Discover real-world design inspiration.</h1>
                <p className="text-gray-500 mt-5 text-xl max-w-2xl mx-auto">
                    Featuring over 300,000 screens and 1,000 iOS, Android & Web apps — New content weekly.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <button className="bg-black text-white px-5 py-2 rounded-full font-medium">Join for free</button>
                    <button className="border border-gray-300 px-5 py-2 rounded-full font-medium">See our plans →</button>
                </div>
            </div>
            <div className="mt-20 text-center">
                <p className="text-xs text-gray-500 mb-4">Trusted by design teams at</p>
                <div className="flex justify-center space-x-6 text-gray-400 text-xl">
                    {companies.map((company, index) => (
                        <span className="font-semibold" key={index}>{company}</span>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};
