import React from "react";

const companies = ["Uber", "headspace", "Meta", "airbnb", "Revolut", "Metalab", "Pinterest"];

export const AppIntroduce = () => {
    return (
        <section className="w-1/2 flex flex-col justify-between items-center  border-2 border-red-500 py-16">
            <div className="text-center">
                <div className="flex justify-center mb-5">
                    <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center text-black text-2xl font-bold mb-5">
                        Uber
                    </div>
                    </div>
                    <h1 className="text-7xl font-semibold">Discover real-world design inspiration.</h1>
                    <p className="text-gray-500 mt-5 text-xl max-w-2xl mx-auto">
                    Featuring over 300,000 screens and 1,000 iOS, Android & Web apps — New content weekly.
                    </p>
                    <div className="mt-7 flex justify-center space-x-4">
                    <button className="bg-black text-white px-5 py-2 rounded-full font-medium">Join for free</button>
                    <button className="border border-gray-300 px-5 py-2 rounded-full font-medium">See our plans →</button>
                </div>
            </div>
            <div className="mt-20 text-center">
                <p className="text-xs text-gray-500 mb-4">Trusted by design teams at</p>
                <div className="flex justify-center space-x-6 text-gray-400 text-xl">
                {companies.map((company, index) => (
                    <span key={index}>{company}</span>
                ))}
                </div>
            </div>
        </section>
    );
  };