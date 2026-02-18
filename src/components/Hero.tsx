"use client";

import React from "react";
import WithBadge from "@/components/ui/WithBadge";
import Image from "next/image";
import { motion } from "framer-motion";
import CurvedDiamond from "@/components/ui/CurvedDiamond";
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-[60vh] pt-14 pb-16 md:pt-18 md:pb-20 px-6 md:px-10 overflow-hidden">

            {/* Container */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="text-center relative z-10 w-full max-w-4xl"
            >

                {/* Top Text */}

                <motion.p variants={item} className="font-mono font-bold text-[23px] md:text-[44px] py-4 tracking-tighter leading-none font-inter-tight bg-clip-text text-transparent"
                    style={{
                        backgroundImage:
                            "linear-gradient(180deg, #ffffff, #5d5d5d)",
                    }}>
                    solving <br /> design puzzles
                </motion.p>

                {/* Main Heading Group */}
                <motion.div variants={item} className="relative inline-block mt-4 md:mt-8">
                    {/* Images with Floating Animation */}

                    {/* Left Image */}
                    <motion.div
                        className="absolute top-[60%] -left-4 sm:-left-10 md:top-[80%] md:-left-26 w-20 h-20 sm:w-22 sm:h-22 md:w-48 md:h-48 z-20 pointer-events-none"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Image
                            src="/left-image.png"
                            alt="Cute Cat"
                            width={192}
                            height={192}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>



                    {/* Right Image */}
                    <motion.div
                        className="absolute top-[-10%] -right-6 sm:-right-6 md:top-[-15%] md:-right-6 w-20 h-20 sm:w-22 sm:h-22 md:w-48 md:h-48 -z-20 pointer-events-none "
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <Image
                            src="/right-image.png"
                            alt="Noodles"
                            width={192}
                            height={192}
                            className="w-full h-full object-contain"

                        />
                    </motion.div>





                    {/* WITH Badge */}
                    <div
                        className=" absolute top-9 left-8 -translate-x-1/2 -translate-y-1/2 rotate-[-20deg] scale-75 sm:top-10 sm:left-[10%] sm:rotate-[-25deg] sm:scale-80 md:top-16 md:left-[16%] md:rotate-[-30deg] md:scale-100 font-tanker -z-20 pointer-events-none "
                    >
                        <WithBadge />
                    </div>



                    {/* Main Text */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-[3.8rem] md:text-[8rem] font-normal leading-[0.9] tracking-normal uppercase font-tanker"
                    >
                        <span
                            className="bg-clip-text text-transparent bg-[rgb(232,203,192)]"

                        >
                            EMPATHY
                        </span>{" "}
                        <span className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(180deg, #a7a7b8 0%, #353549 100%)",
                            }}>
                            &
                        </span>
                        <br />

                        <span className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(180deg, #a7a7b8 0%, #353549 100%)",
                            }}>
                            JUST ENOUGH
                        </span>{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80.7661%)",
                            }}>
                            EDGE
                        </span>

                    </motion.h1>
                </motion.div>

                {/* Divider */}
                <motion.div variants={item} className="mt-8 w-full max-w-4xl flex items-center justify-center gap-3 sm:gap-6 opacity-30 px-4 mx-auto">
                    <div className="h-[1.5px] sm:h-[2px] md:h-[4px] bg-gradient-to-l from-transparent via-gray-300 to-transparent w-full"></div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }} className="flex-shrink-0 scale-75 sm:scale-100">
                        <CurvedDiamond />
                    </motion.div>
                    <div className="h-[1.5px] sm:h-[2px] md:h-[4px] bg-gradient-to-l from-transparent via-gray-300 to-transparent w-full"></div>
                </motion.div>



            </motion.div>
        </section >
    );
};

export default Hero;
