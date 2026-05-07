"use client"

import { motion } from "framer-motion"

export default function SchoolBusTrackerCaseStudy() {
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
                    School Bus Tracker UI
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-400 text-center text-lg md:text-2xl max-w-3xl mx-auto"
                >
                    A comprehensive UI design project created during my 7th semester to learn website design and master Figma.
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
                        src="/School Bus Tracker/Hero Screnn.png"
                        alt="School Bus Tracker Visual Design"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </section>

            {/* 3. INTRODUCTION / DETAILS */}
            <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
                <div className="space-y-6 mb-16 text-center max-w-4xl mx-auto">
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                        This design was created as part of my 7th-semester project work. The primary goal was to design an intuitive and user-friendly interface for tracking school buses, while simultaneously providing a hands-on learning experience to dive deep into website design principles and master Figma tools.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-10 border-t border-white/10">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Project Name</span>
                        <span className="text-white font-medium text-lg">School Bus Tracker</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Role</span>
                        <span className="text-white font-medium text-lg">UI Designer</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Goal</span>
                        <span className="text-white font-medium text-lg">Academic Project & Learning</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Category</span>
                        <span className="text-white font-medium text-lg">Web App UI</span>
                    </div>
                </div>

                <div className="flex justify-center mt-12 pb-6 border-b border-white/10">
                    <a
                        href="https://www.figma.com/design/goyfizzgHDsqOKQJ2hM2bB/School-Bus-Tracker?m=auto&t=NOqJXSesWinKeL7H-1"
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
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest text-center mb-6">Learning & Execution</h2>
                    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20 leading-relaxed text-lg">
                        The core objective was to create a practical, user-centric dashboard layout that administrators and parents could easily navigate while allowing me to practice advanced Figma techniques.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Learning Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-orange-500/20 relative shadow-2xl hover:border-orange-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-orange-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-orange-500/20 text-orange-500 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black border border-orange-500/50">!</span>
                                <span className="text-white font-bold tracking-wide">Challenge</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Designing Complex <br /> Dashboards
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Dashboard interfaces require a lot of data visualization and structured information architectures. The challenge was keeping the design beautiful and uncluttered while ensuring that users can access vital tracking information at a glance.
                            </p>
                        </div>

                        {/* Outcome Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-purple-500/20 relative shadow-2xl mt-12 md:mt-0 hover:border-purple-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-purple-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-purple-500/20 text-purple-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border border-purple-500/50">✓</span>
                                <span className="text-white font-bold tracking-wide">Implementation</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Structured, Component-Based <br /> Layouts
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                I utilized a robust component system and clear auto-layouts to segment different functionalities like tracking maps, schedules, and notifications. This structured approach streamlined the design and served as an excellent practical Figma exercise.
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
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Colors & Typography</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Defined a trustworthy and engaging color palette, utilizing primary, secondary, and neutral tones. Established clear typographic hierarchy for optimal readability on dashboards.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">02</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Wireframing</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Drafted initial layouts to map out core features like real-time tracking, student lists, and driver information before committing to high-fidelity designs.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">03</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">UI Components</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Designed foundational elements, ensuring consistency across buttons, cards, and input fields to simplify eventual development and maintain a cohesive look.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">04</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">High-Fidelity Screens</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Developed multiple full-screen dashboard interfaces targeting different user roles, such as school administrators and parents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. STRUCTURE, WIREFRAMES, AND OUTCOMES */}
            <section className="w-full py-28 px-6 md:px-12 lg:px-24 space-y-36">

                {/* Cross-Platform Bento Grid */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-tanker text-3xl md:text-4xl text-gray-300 tracking-widest mb-16 text-center">Design Elements & Mockups</h2>

                    <div className="flex flex-col gap-16 md:gap-24">
                        {/* Colors */}
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative bg-[#16161a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-2xl p-6 flex-1"
                            >
                                <img src="/School Bus Tracker/Primary.png" alt="Primary Color" className="w-full h-auto rounded-2xl relative z-10 transform group-hover:scale-[1.02] transition duration-700" loading="lazy" />
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative bg-[#16161a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-2xl p-6 flex-1"
                            >
                                <img src="/School Bus Tracker/Secondary.png" alt="Secondary Color" className="w-full h-auto rounded-2xl relative z-10 transform group-hover:scale-[1.02] transition duration-700" loading="lazy" />
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative bg-[#16161a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-2xl p-6 flex-1"
                            >
                                <img src="/School Bus Tracker/Neutral.png" alt="Neutral Color" className="w-full h-auto rounded-2xl relative z-10 transform group-hover:scale-[1.02] transition duration-700" loading="lazy" />
                            </motion.div>
                        </div>
                        
                        {/* Typography */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative bg-[#16161a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-2xl p-6 md:p-12"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
                            <img src="/School Bus Tracker/School Bus Tracker Typography.png" alt="School Bus Tracker Typography" className="w-full h-auto rounded-2xl relative z-10 transform group-hover:scale-[1.02] transition duration-700" loading="lazy" />
                        </motion.div>

                        {/* Mockup 1: Hero Section */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative bg-gradient-to-b from-[#16161a]/90 to-[#101014]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden group shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] p-4 md:p-8"
                        >
                            <img src="/School Bus Tracker/Hero section.png" alt="Hero Section Mockup" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-1000 relative z-10 rounded-xl" loading="lazy" />
                        </motion.div>

                        {/* Mockup 2: Features Screen */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative bg-gradient-to-b from-[#16161a]/90 to-[#101014]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden group shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] p-4 md:p-8"
                        >
                            <img src="/School Bus Tracker/Features Screen.png" alt="Features Screen Mockup" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-1000 relative z-10 rounded-xl" loading="lazy" />
                        </motion.div>
                        
                        {/* Mockup 3: School Dashboard */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative bg-gradient-to-b from-[#16161a]/90 to-[#101014]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden group shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] p-4 md:p-8"
                        >
                            <img src="/School Bus Tracker/School Dashboard Screnn.png" alt="School Dashboard Mockup" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-1000 relative z-10 rounded-xl" loading="lazy" />
                        </motion.div>

                        {/* Mockup 4: Parent Dashboard */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative bg-gradient-to-b from-[#16161a]/90 to-[#101014]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden group shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] p-4 md:p-8"
                        >
                            <img src="/School Bus Tracker/Parent Dashboard Screen.png" alt="Parent Dashboard Mockup" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-1000 relative z-10 rounded-xl" loading="lazy" />
                        </motion.div>
                    </div>

                </div>

                {/* Outcome */}
                <div className="max-w-4xl mx-auto text-center bg-[#16161a]/95 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest mb-8 relative z-10">The Result</h2>
                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed relative z-10">
                        This 7th-semester project proved to be an invaluable exercise in bridging design concepts with practical tools. I significantly <span className="text-white font-medium">accelerated my proficiency in Figma</span>, specifically mastering auto-layouts, components, and creating structured, scalable web interface designs.
                    </p>
                </div>
            </section>
        </main>
    )
}
