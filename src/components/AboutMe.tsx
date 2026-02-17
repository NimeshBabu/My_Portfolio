"use client";
import React from "react";
import HelloCursor from "@/components/ui/HelloCursor";
import InteractiveProfile from "@/components/ui/InteractiveProfile";

const AboutMe: React.FC = () => {
    return (
        <section className="relative flex justify-center py-15 sm:py-17 md:py-18 lg:py-20 px-6 md:px-8 w-full">
            {/* Wider container */}
            <div className="flex flex-col md:flex-row items-center gap-14 md:gap-24">

                {/* Image */}
                <HelloCursor />
                <div
                    className="flex-shrink-0"
                    id="profile-container"
                >
                    <InteractiveProfile />
                </div>


                {/* Text */}
                <div className="max-w-2xl text-center md:text-justify">

                    {/* Top Name */}
                    <p className="font-tanker text-4xl md:text-6xl mb-6 tracking-wide bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80.7661%)",
                        }}>
                        HELLO, I'M NIMESH!
                    </p>

                    {/* Description */}
                    <p className="font-space text-[16px] md:text-[20px] leading-relaxed text-gray-400 tracking-wide "
                        >
                        an aspiring <span className="text-white">UI/UX & Product Designer</span> passionate about turning ideas
                        into thoughtful, human-centered digital experiences. With a growing foundation in web technologies and user experience design,
                        I enjoy solving problems, simplifying complexity, and designing products
                        that feel intuitive and meaningful.
                        <br /><br />
                        "When I’m not designing, you’ll probably find me listening to music,
                        sipping chai, and sketching new ideas — because the best concepts often
                        start between playlists and tea breaks."
                    </p>




                    {/* Resume Button */}
                    <div className="relative inline-block group mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" fill="none" className="absolute -top-5 -right-6 pointer-events-none"><path stroke="#F9D34C" strokeLinecap="round" strokeWidth="3" d="M9.06 17.3c.084-1.992 3.262-3.654 4.461-4.963a145.227 145.227 0 0 1 5.708-5.896c1.038-1.012 2.874-2.345 3.018-3.823m-8.392 22.144c4.297-.43 8.438-1.897 12.804-1.897M2 2v9.958"/></svg>
                        <button className="px-7 py-3
                                rounded-2xl
                                bg-yellow-400
                                border border-white/10
                                backdrop-blur-md
                                hover:bg-yellow-400
                                text-black
                                transition-all duration-300
                                font-space font-medium
                                tracking-wide
                                shadow-[0_0_0_rgba(0,0,0,0)]
                                hover:shadow-[0_10px_40px_rgba(250,204,21,0.35)]
                                hover:scale-105">
                            View Resume
                        </button>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default AboutMe;
