"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import HelloCursor from "@/components/ui/HelloCursor";
import InteractiveProfile from "@/components/ui/InteractiveProfile";

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonVariants: Variants = {
    rest: { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
    hover: {
        scale: 1.05,
        boxShadow: "0 10px 40px rgba(250,204,21,0.35)",
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const AboutMe: React.FC = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <section id="about" className="relative flex justify-center py-16 md:py-18 px-6 md:px-10 w-full ">
            <motion.div
                className="flex flex-col md:flex-row items-center gap-14 md:gap-24"
                variants={containerVariants}
                initial={isMobile ? "visible" : "hidden"}
                whileInView="visible" // ✅ Animates when in viewport
                viewport={{ once: true, amount: 0.2 }} // ✅ Trigger once when 20% visible
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
                        <span className="text-white">UI/UX Designer</span>{" "}
                        passionate about creating intuitive, human-centered digital experiences. I combine design thinking with web development to build interfaces that are both meaningful and functional.
                        <br />
                        <br />
                        Beyond design, I enjoy coding and building projects that turn ideas into real, interactive experiences.
                        <br />
                        <br />
                        "When I’m not designing, you’ll probably find me listening to music,
                        sipping chiya, and sketching new ideas — because the best concepts often
                        start between playlists and tea breaks."
                    </motion.p>

                    {/* Resume Button */}
                    <motion.div variants={itemVariants}>
                        <a href="/NimeshBabuThapa.pdf" target="_blank" rel="noopener noreferrer">
                            <div className="relative inline-block group mt-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29"
                                    height="27"
                                    fill="none"
                                    className=" absolute -top-5 -right-6 pointer-events-none group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
                                >
                                    <path
                                        stroke="#F9D34C"
                                        strokeLinecap="round"
                                        strokeWidth="3"
                                        d="M9.06 17.3c.084-1.992 3.262-3.654 4.461-4.963a145.227 145.227 0 0 1 5.708-5.896c1.038-1.012 2.874-2.345 3.018-3.823m-8.392 22.144c4.297-.43 8.438-1.897 12.804-1.897M2 2v9.958"
                                    />
                                </svg>

                                <button type="button" className=" px-8 py-3 rounded-2xl bg-yellow-400 text-black font-space font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(250,204,21,0.35)] active:scale-95">
                                    View Resume
                                </button>
                            </div>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;