"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SocialIcons } from "@/components/ui/SocialIcons"

export default function ContactSection() {
    return (
        <section className="pt-20 pb-10 md:py-12 px-6 md:px-8">

            <motion.div

                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}

                className="
                    max-w-7xl mx-auto
                    relative overflow-hidden
                    rounded-[40px]
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    p-8 sm:p-10 md:p-12 lg:p-14
                    hover:border-yellow-400/30
                    transition-all duration-500
                "
            >

                {/* Background glow */}
                <div className="
                    absolute inset-0 opacity-40
                    bg-[radial-gradient(circle_at_80%_50%,rgba(250,204,21,0.15),transparent_60%)]
                    pointer-events-none
                "/>


                {/* Content */}
                <div className="
                    relative z-10 text-center md:text-left
                    flex flex-col md:flex-row
                    md:items-center md:justify-between
                    gap-12 md:gap-16
                ">


                    {/* LEFT */}
                    <div className="max-w-xl">

                        <h2
                            className="
                                font-tanker 
                                text-4xl sm:text-5xl md:text-6xl
                                tracking-wide
                                bg-clip-text text-transparent
                            "
                            style={{
                                backgroundImage:
                                    "linear-gradient(0deg, rgba(99,111,164,0.5) 0%, rgb(232,203,192) 80%)",
                            }}
                        >
                            Have something in mind?
                        </h2>


                        <p className="
                            font-space
                            text-gray-400
                            mt-5
                            text-base md:text-lg
                            tracking-wide
                        ">
                            I'm open to design, development, and collaboration
                            opportunities. Let's build something meaningful together.
                        </p>


                        {/* Button */}
                        <Link href="mailto:nikeshthapa2005@gmail.com">

                            <div className="relative inline-block group mt-8">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29"
                                    height="27"
                                    fill="none"
                                    className="
                                        absolute -top-5 -right-6
                                        pointer-events-none
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                        transition duration-300
                                    "
                                >
                                    <path
                                        stroke="#F9D34C"
                                        strokeLinecap="round"
                                        strokeWidth="3"
                                        d="M9.06 17.3c.084-1.992 3.262-3.654 4.461-4.963a145.227 145.227 0 0 1 5.708-5.896c1.038-1.012 2.874-2.345 3.018-3.823m-8.392 22.144c4.297-.43 8.438-1.897 12.804-1.897M2 2v9.958"
                                    />
                                </svg>

                                <button className="
                                    px-8 py-3
                                    rounded-2xl
                                    bg-yellow-400
                                    text-black
                                    font-space font-medium
                                    transition-all duration-300
                                    hover:scale-105
                                    hover:shadow-[0_10px_40px_rgba(250,204,21,0.35)]
                                    active:scale-95
                                ">
                                    Let's Connect
                                </button>

                            </div>

                        </Link>


                        <p className="
                            font-space text-gray-500 text-md mt-6 tracking-wide
                        ">
                            Available for freelance and full-time roles.
                        </p>

                    </div>



                    {/* RIGHT */}
                    <div className="flex flex-col items-center gap-6 md:absolute md:bottom-1 md:right-12
                    ">

                        <p className="font-tanker text-2xl md:text-3xl tracking-wide
                            
                        ">
                            Get in touch
                        </p>

                        <SocialIcons />

                    </div>
                    

                </div>


                {/* border highlight */}
                <div className="
                    absolute inset-0 rounded-[40px]
                    bg-gradient-to-b from-white/[0.06] to-transparent
                    pointer-events-none
                "/>
                

            </motion.div>

        </section>
    )
}
