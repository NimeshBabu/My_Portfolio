"use client"

import { motion } from "framer-motion"

export default function GoCartCaseStudy() {
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
                    GoCart Platform
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-400 text-center text-lg md:text-2xl max-w-3xl mx-auto"
                >
                    A modern, robust e-commerce experience designed to delight shoppers and empower vendors with premium gadgets.
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
                        src="/Gocart.png"
                        alt="GoCart Visual Design"
                        className="w-full h-auto object-cover transform duration-1000 group-hover:scale-105"
                    />
                </motion.div>
            </section>

            {/* 3. INTRODUCTION / DETAILS */}
            <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
                <div className="space-y-6 mb-16 text-center max-w-4xl mx-auto">
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                        GoCart is a robust multi-vendor digital e-commerce platform built strictly from a development-first perspective. 
                        The primary focus was establishing a highly scalable architecture that supports multiple vendors managing their own products, alongside a seamless, high-performance customer storefront. Built dynamically using Next.js, Tailwind CSS, and Redux Toolkit.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-10 border-t border-white/10">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Project Name</span>
                        <span className="text-white font-medium text-lg">GoCart Platform</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Role</span>
                        <span className="text-white font-medium text-lg">Full Stack Developer</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Timeline</span>
                        <span className="text-white font-medium text-lg">2025</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Tech Stack</span>
                        <span className="text-white font-medium text-lg">Next.js, Redux Toolkit</span>
                    </div>
                </div>

                <div className="flex justify-center mt-12 pb-6 border-b border-white/10">
                    <a
                        href="https://gocart-rosy.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 font-medium transition-all group shadow-[0_10px_40px_rgba(250,204,21,0.2)] hover:scale-105"
                    >
                        <span>Visit Live App</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </a>
                </div>
            </section>

            {/* 4. PROBLEM AND SOLUTION */}
            <section className="px-6 md:px-12 lg:px-24 py-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-6">Problem and Solution</h2>
                    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20 leading-relaxed text-lg">
                        Creating an e-commerce platform that handles multiple concurrent vendors requires complex state management and seamless routing architectures.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Problem Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-red-500/20 relative shadow-2xl hover:border-red-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-red-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-red-500/20 text-red-500 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black border border-red-500/50">!</span>
                                <span className="text-white font-bold tracking-wide">Challenge</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Complex Multi-Vendor <br/> State Management
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                The core engineering challenge was building an architecture that could effectively separate concerns between a massive customer-facing storefront, dedicated vendor management dashboards, and a global super-admin panel, all while maintaining lightning-fast page loads.
                            </p>
                        </div>

                        {/* Solution Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-blue-500/20 relative shadow-2xl mt-12 md:mt-0 hover:border-blue-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-blue-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-blue-500/20 text-blue-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border border-blue-500/50">✓</span>
                                <span className="text-white font-bold tracking-wide">Solution</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Next.js Architecture & <br/> Redux Integration
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Implemented a highly optimized Next.js App Router structure. Leveraged Redux Toolkit to securely manage complex global states across different authentication layers, ensuring that vendor data, cart sessions, and admin controls remain cleanly separated and instantly reactive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DESIGN PROCESS */}
            <section className="w-full py-28 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-20">Development Process</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-yellow-400 group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">01</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Architecture Setup</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Established the core foundational repository utilizing Next.js, planning out the complex multi-tenant routing schema required to support distinct dashboards for Public Users, Vendors, and Admins natively.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-yellow-400 group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">02</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">State Management</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Integrated Redux Toolkit to provide a centralized, predictable state container, ensuring that active shopping carts, user sessions, and vendor product updates sync harmlessly across thousands of components.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-yellow-400 group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">03</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">UI Engineering</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Translated functional requirements into fluid frontend components entirely via code using Tailwind CSS and Lucide React, ensuring maximum performance without relying on high-fidelity visual prototypes.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-yellow-400 group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">04</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Deployment & Integration</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Finalized API integrations and multi-tier authentication guardrails before deploying the fully functional codebase as a live demo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. VISUAL DESIGN / SHOWCASE */}
            <section className="px-6 md:px-12 lg:px-24 py-28">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-16">Platform Interface</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group flex flex-col justify-end p-6">
                            <img src="/Login_gocart.png" alt="Login Flow" className="w-full h-auto max-h-[400px] object-cover rounded-[1.5rem] opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-700" />
                        </div>
                        <div className="bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group flex flex-col justify-end p-6">
                            <img src="/About_gocart.png" alt="About Section" className="w-full h-auto max-h-[400px] object-contain rounded-[1.5rem] opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-700" />
                        </div>
                        <div className="bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group flex flex-col justify-end p-6">
                            <img src="/Contact_gocart.png" alt="Contact Flow" className="w-full h-auto max-h-[400px] object-cover object-top rounded-[1.5rem] opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-700" />
                        </div>
                        <div className="bg-[#16161a]/90 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group flex flex-col justify-end p-6 bg-[#000]">
                            <img src="/Footer_gocart.png" alt="Footer Elements" className="w-full h-auto max-h-[400px] object-contain rounded-[1.5rem] opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. OUTCOME */}
            <section className="w-full py-28 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center bg-[#16161a]/95 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-yellow-500/10 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest mb-8 relative z-10">The Outcome</h2>
                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed relative z-10">
                        GoCart successfully demonstrated my ability to architect and deploy a robust full-stack solution from absolute scratch. By relying purely on code—Next.js, Redux, and Tailwind CSS—I bridged complex data flows with a responsive front-end without the need for pre-existing visual mockups.
                    </p>
                </div>
            </section>
        </main>
    )
}
