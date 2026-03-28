"use client"

import { motion } from "framer-motion"

export default function NexoraBiopharmaCaseStudy() {
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
                    NexoraBiopharma
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-400 text-center text-lg md:text-2xl max-w-3xl mx-auto"
                >
                    A comprehensive UI/UX case study for a cutting-edge biopharma platform.
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
                        src="/Desktop - 1.png"
                        alt="NexoraBiopharma Visual Design"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </section>

            {/* 3. INTRODUCTION / DETAILS */}
            <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
                <div className="space-y-6 mb-16 text-center max-w-4xl mx-auto">
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                        NexoraBiopharma required a highly cohesive digital ecosystem designed to harmonize scientific precision with an elegant, patient-centric user experience.
                        We created an interface bridging the gap between cutting-edge medical research and public accessibility, organizing a massive inventory of pharmaceutical compounds into digestible visual segments.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-10 border-t border-white/10">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Project Name</span>
                        <span className="text-white font-medium text-lg">Nexora Biopharma</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Role</span>
                        <span className="text-white font-medium text-lg">UI/UX Designer</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Timeline</span>
                        <span className="text-white font-medium text-lg">4 Weeks</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Category</span>
                        <span className="text-white font-medium text-lg">Web & Mobile Design</span>
                    </div>
                </div>

                <div className="flex justify-center mt-12 pb-6 border-b border-white/10">
                    <a
                        href="https://www.figma.com/design/DEzWWgr0BsToD2S0Z9S5Yh/Nexora-Biopharma?m=auto&t=wjK5qBrYRdhLyVyw-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-white font-medium transition-all group shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
                    >
                        <span>View Figma Design</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </a>
                </div>
            </section>

            {/* 4. PROBLEM AND SOLUTION */}
            <section className="px-6 md:px-12 lg:px-24 py-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-6">Problem and Solution</h2>
                    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20 leading-relaxed text-lg">
                        Balancing strict medical compliance with an approachable UI was our core challenge, leading to a structured, conversion-focused design.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Problem Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-red-500/20 relative shadow-2xl hover:border-red-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-red-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-red-500/20 text-red-500 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black border border-red-500/50">!</span>
                                <span className="text-white font-bold tracking-wide">Problem</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Complex Data and <br /> Compliance Needs
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Dealing with massive data tables for drug interactions while keeping the mobile experience lightweight and fast posed significant layout obstacles. Complex scientific data needed to be approachable while maintaining regulatory compliance across all marketing copy.
                            </p>
                        </div>

                        {/* Solution Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-blue-500/20 relative shadow-2xl mt-12 md:mt-0 hover:border-blue-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-blue-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-blue-500/20 text-blue-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border border-blue-500/50">✓</span>
                                <span className="text-white font-bold tracking-wide">Solution</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Intelligent Rendering & <br /> Clean Architecture
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                We implemented dynamic data rendering, utilizing collapsible sections and progressive disclosure. We adopted a whitespace-heavy design system with subtle clinical color cues to denote varying levels of information hierarchy without overwhelming users.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DESIGN PROCESS */}
            <section className="w-full py-28 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-20">Design Process</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">01</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Research</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Studied modern pharmaceutical platforms and clinical portals to understand best practices, user expectations, and effective ways to present medical data cleanly.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">02</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Wireframing</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Created low-fidelity wireframes to define the layout, section structure, and informational hierarchy, ensuring a logical user flow for complex compound data.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">03</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">UI Design</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Developed the visual design using a clean palette, modern typography, and clinical cues to create an engaging yet highly professional medical interface.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">04</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Final Design</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Refined the interface with improved spacing, consistent components, and accessible data tables to deliver a premium, conversion-friendly experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. VISUAL DESIGN / STYLING */}
            <section className="px-6 md:px-12 lg:px-24 py-28 ">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-16">Visual System</h2>
                    <div className="flex flex-col gap-10">
                        <div className="bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 flex items-center justify-center border border-white/5 shadow-2xl">
                            <img src="/Colors.png" alt="Color System" className="w-full max-w-5xl h-auto object-contain drop-shadow-lg" />
                        </div>
                        <div className="bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 flex items-center justify-center border border-white/5 shadow-2xl">
                            <img src="/Typography.png" alt="Typography System" className="w-full max-w-5xl h-auto object-contain drop-shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. STRUCTURE, WIREFRAMES, AND OUTCOMES */}
            <section className="w-full py-28 px-6 md:px-12 lg:px-24 space-y-36">

                {/* Grid */}
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-tanker text-3xl md:text-4xl text-gray-300 tracking-widest mb-12">Interaction & Grid System</h2>
                    <div className="bg-[#1a1921]/90 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] ring-1 ring-white/5 inline-block w-full">
                        <img src="/Grid and Indention.png" alt="Grid System" className="w-full h-auto object-contain rounded-2xl" />
                    </div>
                </div>

                {/* Wireframes */}
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-tanker text-3xl md:text-4xl text-gray-300 tracking-widest mb-12">Wireframes & Plannings</h2>
                    <div className="bg-[#1f1e24]/90 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] ring-1 ring-white/5 inline-block w-full">
                        <img src="/Wireframe.png" alt="Wireframe components" className="w-full h-auto object-contain rounded-2xl" />
                    </div>
                </div>

                {/* Cross-Platform Bento Grid */}
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-3xl md:text-4xl text-gray-300 tracking-widest mb-16 text-center">Cross-Platform Experience</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[350px]">
                        {/* Huge iMac Card */}
                        <div className="md:col-span-2 relative bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] border border-white/5 overflow-hidden group">
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60 z-10"></div>
                            <img src="/iMac_on_Table_Mockup_1.png" alt="Desktop Interface" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 relative z-0" />
                        </div>

                        {/* Tall Mobile Card */}
                        <div className="relative bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] border border-white/5 overflow-hidden group min-h-[350px]">
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[100%] h-48 bg-white/10 blur-[60px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60 z-10"></div>
                            <img src="/Free_iPhone_13_Mockup_1.png" alt="Mobile Interface" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 relative z-0" />
                        </div>

                        {/* Bottom Small Square Card (Mobile Detail) */}
                        <div className="relative bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] border border-white/5 overflow-hidden group min-h-[350px]">
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-white/10 blur-[40px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60 z-10"></div>
                            <img src="/Free_iPhone_13_Mockup_2.png" alt="Mobile Detail" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 relative z-0" />
                        </div>

                        {/* Bottom Wide iPad Card */}
                        <div className="md:col-span-2 relative bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] border border-white/5 overflow-hidden group min-h-[350px]">
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-white/10 blur-[60px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60 z-10"></div>
                            <img src="/DM_iPad Pro Mockup 3.png" alt="Tablet Interface" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 relative z-0" />
                        </div>
                    </div>
                </div>

                {/* Outcome */}
                <div className="max-w-4xl mx-auto text-center bg-[#16161a]/95 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest mb-8 relative z-10">The Outcome</h2>
                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed relative z-10">
                        A <span className="text-white font-medium">45% reduction</span> in user search time for specific medications was observed post-launch. Furthermore, the intuitive interface led to significantly increased retention rates among B2B medical professionals utilizing the platform's diagnostic tools daily.
                    </p>
                </div>
            </section>
        </main>
    )
}
