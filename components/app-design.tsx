"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import walletScreen from "../assets/images/wallet-screen.png";

const images = [
    { src: walletScreen, label: "Subscription & Paywall" },
    { src: walletScreen, label: "Login" },
    { src: walletScreen, label: "Settings" },
    { src: walletScreen, label: "Checkout" },
    { src: walletScreen, label: "Collections" },
    { src: walletScreen, label: "Profile" },
    { src: walletScreen, label: "Wallet" },
];

export const AppDesign = () => {
    const [activeTab, setActiveTab] = useState("Screens");

    return (
        <section className="w-full flex flex-col justify-center items-center gap-10 py-16">
            <div className="w-2/5 text-center max-w-lg">
                <h1 className="text-5xl  font-semibold ">
                    Find design patterns in seconds.
                </h1>
            </div>

            <div className=" flex flex-wrap justify-center gap-2 bg-gray-100 px-3 py-2 rounded-full ">
                {["Screens", "UI Elements", "Flows", "Text in Screenshot"].map((tab) => (
                    <button
                        key={tab}
                        className={`px-3 sm:px-4 py-1 rounded-full font-medium transition ease-in-out duration-500 ${
                            activeTab === tab ? "bg-white text-black shadow-md" : "text-gray-600"
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="overflow-hidden w-full mt-10">
                <motion.div
                    className="flex space-x-3"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 35,
                        ease: "linear",
                    }}
                >
                    {[...images, ...images].map((image, index) => ( 
                        <div key={index} className="flex flex-col items-center min-w-[300px]">
                            <p className="text-center mb-2 font-medium">{image.label}</p>
                            <Image
                                src={image.src}
                                alt={image.label}
                                width={250}
                                height={500}
                                className="rounded-xl shadow-md border-2 border-gray-100"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
