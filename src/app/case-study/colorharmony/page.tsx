"use client"

import { motion } from "framer-motion"

export default function ColorHarmonyCaseStudy() {
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
                    Color Harmony
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-400 text-center text-lg md:text-2xl max-w-3xl mx-auto"
                >
                    A fast, elegant web application for generating beautiful and precise color harmony palettes from a single base color.
                </motion.p>
            </section>

            {/* 2. MAIN VISUAL DESIGN IMAGE */}
            <section className="px-6 md:px-12 lg:px-24 pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full bg-[#16161a] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/5 group"
                >
                    <img
                        src="/ColorHarmony.png"
                        alt="Color Harmony visual interface"
                        className="w-full h-[300px] md:h-[600px] object-cover transform duration-1000 group-hover:scale-105"
                        onError={(e) => {
                            // Fallback if the user hasn't created the image yet
                            e.currentTarget.src = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop";
                        }}
                    />
                </motion.div>
            </section>

            {/* 3. INTRODUCTION / DETAILS */}
            <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
                <div className="space-y-6 mb-16 text-center max-w-4xl mx-auto">
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                        I built Color Harmony to solve the complexity of calculating exact UI palettes mathematically. By using HSL color space transformations, it automatically provides comprehensive color relations—from Triadic to Split Complementary—all with zero external APIs and complete privacy running right in the browser.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-10 border-t border-white/10">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Project Name</span>
                        <span className="text-white font-medium text-lg">Color Harmony</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Role</span>
                        <span className="text-white font-medium text-lg">Creator / Developer</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Tech</span>
                        <span className="text-white font-medium text-lg">React, Vite, Canvas</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Category</span>
                        <span className="text-white font-medium text-lg">Developer Tool</span>
                    </div>
                </div>

                <div className="flex justify-center flex-wrap gap-6 mt-12 pb-6 border-b border-white/10">
                    <a
                        href="https://color-harmony-murex.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium transition-all group shadow-xl hover:shadow-indigo-500/30 hover:scale-105"
                    >
                        <span>Live Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </a>
                    <a
                        href="https://github.com/NimeshBabu/Color_Harmony"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#16161a] border border-white/10 hover:border-white/20 text-white font-medium transition-all group shadow-xl hover:scale-105"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                        <span>GitHub Source</span>
                    </a>
                </div>
            </section>

            {/* 4. PROBLEM AND SOLUTION */}
            <section className="px-6 md:px-12 lg:px-24 py-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-6">The Goal</h2>
                    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20 leading-relaxed text-lg">
                        Creating robust color systems can often rely too heavily on "eyeballing" rather than mathematical precision.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Problem Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-red-500/20 relative shadow-2xl hover:border-red-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-red-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-red-500/20 text-red-500 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black border border-red-500/50">!</span>
                                <span className="text-white font-bold tracking-wide">Problem</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Need For Precise <br/> Scientific Palettes
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Finding the perfect complementary or analogous colors across large design systems is an inexact science when done manually. Most free tools require sign-ups, are heavily layered with ads, or send color preferences to external APIs causing unnecessary latency.
                            </p>
                        </div>

                        {/* Solution Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-blue-500/20 relative shadow-2xl mt-12 md:mt-0 hover:border-blue-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-blue-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-blue-500/20 text-blue-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border border-blue-500/50">✓</span>
                                <span className="text-white font-bold tracking-wide">Solution</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Fast & Local <br/> Geometric Logic
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Built an interactive Canvas-powered color wheel that runs 100% locally. Using math formulas to adjust the Hue value, it instantly auto-calculates Complementary (180°), Analogous (±30°), Triadic (120°), and more, making the design process exceptionally fast.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DESIGN PROCESS */}
            <section className="w-full py-28 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-20">Under the Hood</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-indigo-500 group-hover:bg-white transition-colors text-white group-hover:text-black font-black rounded-full flex items-center justify-center text-xl mb-8">01</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">State Management</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Leveraged React 19 to maintain lightning-fast state synchronization between the Hex inputs, the Canvas wheel, and the dynamic palette swatches. 
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-indigo-500 group-hover:bg-white transition-colors text-white group-hover:text-black font-black rounded-full flex items-center justify-center text-xl mb-8">02</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Canvas Drawing</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Utilized the native HTML Canvas API to draw the multi-layered HSL gradient wheel, capturing pixel data for interactive drag-and-drop color picking.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-indigo-500 group-hover:bg-white transition-colors text-white group-hover:text-black font-black rounded-full flex items-center justify-center text-xl mb-8">03</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">URL Syncing</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Implemented hash-based URL synchronization so that color palettes are instantly bookmarkable and shareable without using any centralized database.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-indigo-500 group-hover:bg-white transition-colors text-white group-hover:text-black font-black rounded-full flex items-center justify-center text-xl mb-8">04</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Premium Glass UI</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Encapsulated the logic within a sleek Tailwind CSS v4 frosted-glass UI framework to deliver an engaging, app-like visual experience for the user.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. OUTCOME */}
            <section className="w-full py-28 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center bg-[#16161a]/95 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-indigo-500/20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest mb-8 relative z-10">The Result</h2>
                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed relative z-10">
                        Color Harmony functions as an indispensable pocket-tool for finding exact HSL geometric color pairings. The smooth native canvas rendering, coupled with instantaneous React 19 state updates and private client-side logic, empowers a friction-free design process.
                    </p>
                </div>
            </section>
        </main>
    )
}
