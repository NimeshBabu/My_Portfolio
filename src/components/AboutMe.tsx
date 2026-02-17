"use client";
import React from "react";
import { motion } from "framer-motion";
import HelloCursor from "@/components/ui/HelloCursor";
import InteractiveProfile from "@/components/ui/InteractiveProfile";

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonVariants = {
    rest: { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
    hover: {
        scale: 1.05,
        boxShadow: "0 10px 40px rgba(250,204,21,0.35)",
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const AboutMe: React.FC = () => {
    return (
        <section className="relative flex justify-center py-15 sm:py-17 md:py-18 lg:py-20 px-6 md:px-8 w-full">
            <motion.div
                className="flex flex-col md:flex-row items-center gap-14 md:gap-24"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" // ✅ Animates when in viewport
                viewport={{ once: true, amount: 0.3 }} // ✅ Trigger once when 30% visible
            >
                {/* Image */}
                <motion.div
                    className="flex-shrink-0"
                    id="profile-container"
                    variants={itemVariants}
                >
                    <HelloCursor />
                    <InteractiveProfile />
                </motion.div>

                {/* Text */}
                <motion.div
                    className="max-w-2xl text-center md:text-justify"
                    variants={itemVariants}
                >
                    {/* Top Name */}
                    <motion.p
                        className="font-tanker text-4xl md:text-6xl mb-6 tracking-wide bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80.7661%)",
                        }}
                        variants={itemVariants}
                    >
                        HELLO, I'M NIMESH!
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="font-space text-[16px] md:text-[20px] leading-relaxed text-gray-400 tracking-wide"
                        variants={itemVariants}
                    >
                        an aspiring{" "}
                        <span className="text-white">UI/UX & Product Designer</span>{" "}
                        passionate about turning ideas into thoughtful, human-centered digital experiences.
                        With a growing foundation in web technologies and user experience design,
                        I enjoy solving problems, simplifying complexity, and designing products
                        that feel intuitive and meaningful.
                        <br />
                        <br />
                        "When I’m not designing, you’ll probably find me listening to music,
                        sipping chai, and sketching new ideas — because the best concepts often
                        start between playlists and tea breaks."
                    </motion.p>

                    {/* Resume Button */}
                    <motion.div
                        className="relative inline-block group mt-10"
                        variants={itemVariants}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="27"
                            fill="none"
                            className="absolute -top-5 -right-6 pointer-events-none"
                        >
                            <path
                                stroke="#F9D34C"
                                strokeLinecap="round"
                                strokeWidth="3"
                                d="M9.06 17.3c.084-1.992 3.262-3.654 4.461-4.963a145.227 145.227 0 0 1 5.708-5.896c1.038-1.012 2.874-2.345 3.018-3.823m-8.392 22.144c4.297-.43 8.438-1.897 12.804-1.897M2 2v9.958"
                            />
                        </svg>
                        <motion.button
                            className="px-7 py-3
                                rounded-2xl
                                bg-yellow-400
                                border border-white/10
                                backdrop-blur-md
                                hover:bg-yellow-400
                                text-black
                                transition-all duration-300
                                font-space font-medium
                                tracking-wide"
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            View Resume
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;