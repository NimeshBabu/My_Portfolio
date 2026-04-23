"use client"

import { motion } from "framer-motion"

export default function MobileAppUIDesignSystemCaseStudy() {
    return (
        <main
            className="text-white font-space min-h-screen"
            style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="none"><g clip-path="url(%23a)"><path fill="%231C1B21" d="M0 0h150v150H0z"/><path stroke="%2319181D" stroke-width="10" d="M35 150V0m80 150V0M0 35h150M0 115h150"/></g><defs><clipPath id="a"><path fill="%23fff" d="M0 0h150v150H0z"/></clipPath></defs></svg>')`,
                backgroundRepeat: "repeat",
                backgroundSize: "75px",
                backgroundPosition: "top left",
            }}
        >
            {/* 1. HERO TITLE */}
            <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-tanker text-5xl md:text-7xl lg:text-8xl tracking-wide bg-clip-text text-transparent mb-6 text-center"
                    style={{
                        backgroundImage: "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80.7661%)"
                    }}
                >
                    Mobile App UI Design System
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-400 text-center text-lg md:text-2xl max-w-3xl mx-auto"
                >
                    A foundational design system created to master Figma, featuring reusable components and scalable styles for mobile applications.
                </motion.p>
            </section>

            {/* 2. MAIN VISUAL DESIGN IMAGE */}
            <section className="px-6 md:px-12 lg:px-24 pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full bg-[#16161a] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/5"
                >
                    <img
                        src="/MobileUIDesignMockup.png"
                        alt="Mobile App UI Visual Design"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </section>

            {/* 3. INTRODUCTION / DETAILS */}
            <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
                <div className="space-y-6 mb-16 text-center max-w-4xl mx-auto">
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                        This project focuses on establishing a robust design system to accelerate mobile application development. Created out of a passion to deeply understand Figma's capabilities, the system provides a scalable set of components, typography guidelines, and color palettes that ensure consistency across various screen sizes.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-10 border-t border-white/10">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Project Name</span>
                        <span className="text-white font-medium text-lg">Mobile UI Design System</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Role</span>
                        <span className="text-white font-medium text-lg">UI Designer</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Goal</span>
                        <span className="text-white font-medium text-lg">Skill Development</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Category</span>
                        <span className="text-white font-medium text-lg">Design Systems</span>
                    </div>
                </div>

                <div className="flex justify-center mt-12 pb-6 border-b border-white/10">
                    <a
                        href="https://www.figma.com/design/vtlTuGH429IOU1bz43blXm/Mobile-App-UI-Design?m=auto&t=WoSEN1Z1qkaKoVwK-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium transition-all group shadow-xl hover:shadow-indigo-500/30 hover:scale-105"
                    >
                        <span>View Figma Design</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </a>
                </div>
            </section>

            {/* 4. PROBLEM AND SOLUTION */}
            <section className="px-6 md:px-12 lg:px-24 py-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-6">Learning & Structuring</h2>
                    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20 leading-relaxed text-lg">
                        The core objective was to dive deep into Figma component properties, auto layout, and variable management, transforming fragmented design elements into a systematic library.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Learning Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-orange-500/20 relative shadow-2xl hover:border-orange-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-orange-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-orange-500/20 text-orange-500 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black border border-orange-500/50">!</span>
                                <span className="text-white font-bold tracking-wide">Challenge</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Mastering Figma's <br /> Advanced Features
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Managing multiple design files often leads to inconsistencies. This project served as a sandbox to experiment with Figma's advanced component variants, boolean properties, nested auto-layouts, and token structuring.
                            </p>
                        </div>

                        {/* Outcome Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-purple-500/20 relative shadow-2xl mt-12 md:mt-0 hover:border-purple-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-purple-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-purple-500/20 text-purple-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border border-purple-500/50">✓</span>
                                <span className="text-white font-bold tracking-wide">Implementation</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Scalable & Cohesive <br /> Component Library
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                The result is a meticulously organized UI kit. Buttons, form fields, cards, and navigation structures were designed with dynamic constraints, ensuring immediate adaptability across any screen resolution and device type.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DESIGN PROCESS */}
            <section className="w-full py-28 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-20">Exploration Process</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">01</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Foundation</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Established primitive design tokens. Defined grid layouts, spacing scales, typography hierarchies, and dynamic color variables for light and dark modes.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">02</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Atoms & Molecules</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Modeled foundational UI elements such as icons, buttons, and inputs, progressively combining them to form complex actionable molecules.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">03</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Organisms</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Synthesized larger UI structures. Built adaptable list items, navigation bars, and interactive modal sheets with configurable content areas.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">04</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Mockup Application</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Tested the system's resilience by constructing full-scale mobile layouts, visually confirming alignment, proportion, and aesthetic consistency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. STRUCTURE, WIREFRAMES, AND OUTCOMES */}
            <section className="w-full py-28 px-6 md:px-12 lg:px-24 space-y-36">

                {/* Cross-Platform Bento Grid */}
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-3xl md:text-4xl text-gray-300 tracking-widest mb-16 text-center">Mobile UI Showcase</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-[350px]">
                        {/* Card 1 */}
                        <div className="relative bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] border border-white/5 overflow-hidden group min-h-[350px]">
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-white/10 blur-[60px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60 z-10"></div>
                            <img src="/MobileUIDesignMockup1.png" alt="Mobile Component Detail 1" className="w-full h-full object-contain transform group-hover:scale-105 transition duration-700 relative z-0" loading="lazy" />
                        </div>
                        
                        {/* Card 2 */}
                        <div className="relative bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] border border-white/5 overflow-hidden group min-h-[350px]">
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-white/10 blur-[60px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60 z-10"></div>
                            <img src="/MobileUIDesignMockup2.png" alt="Mobile Component Detail 2" className="w-full h-full object-contain transform group-hover:scale-105 transition duration-700 relative z-0" loading="lazy" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 mt-6 md:mt-8 auto-rows-[400px] md:auto-rows-[550px]">
                        {/* Wide Detailed Layout */}
                        <div className="relative bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] border border-white/5 overflow-hidden group">
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60 z-10"></div>
                            <img src="/MobileUIDesignMockup3.png" alt="Detailed Mobile Screens" className="w-full h-full object-contain transform group-hover:scale-105 transition duration-700 relative z-0" loading="lazy" />
                        </div>
                    </div>
                </div>

                {/* Outcome */}
                <div className="max-w-4xl mx-auto text-center bg-[#16161a]/95 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest mb-8 relative z-10">The Result</h2>
                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed relative z-10">
                        This self-directed project drastically improved my proficiency in Figma's component architectures. By building a complete, structural UI design system from the ground up, I am now able to iterate prototypes <span className="text-white font-medium">with far greater efficiency</span> and ensure uncompromising consistency in every digital product I craft.
                    </p>
                </div>
            </section>
        </main>
    )
}
