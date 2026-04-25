"use client"

import { motion } from "framer-motion"

export default function DeshTripCaseStudy() {
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
                    DeshTrip Landing Page UI
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-400 text-center text-lg md:text-2xl max-w-3xl mx-auto"
                >
                    A clean, vibrant landing page design created to help a friend learn web development while expanding my UI and Figma skills.
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
                        src="/DeshtripMockup.png"
                        alt="DeshTrip Landing Page Visual Design"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </section>

            {/* 3. INTRODUCTION / DETAILS */}
            <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto">
                <div className="space-y-6 mb-16 text-center max-w-4xl mx-auto">
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                        This project is a landing page design for "DeshTrip" created as a collaborative learning experience. The primary goal was to provide a solid, structured design foundation for a friend learning how to build websites. In turn, it provided me with an excellent opportunity to dive deeper into Figma, explore design layouts, and refine my UI skills.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-10 border-t border-white/10">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Project Name</span>
                        <span className="text-white font-medium text-lg">DeshTrip Landing Page</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Role</span>
                        <span className="text-white font-medium text-lg">UI Designer</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Goal</span>
                        <span className="text-white font-medium text-lg">Collaborative Learning</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Category</span>
                        <span className="text-white font-medium text-lg">Landing Page UI</span>
                    </div>
                </div>

                <div className="flex justify-center mt-12 pb-6 border-b border-white/10">
                    <a
                        href="https://www.figma.com/design/YyZdkVkS30pSXUr7JyXtFt/DeshTrip-Landing-Page?m=auto&t=LyA3YWvhzcO3D7CG-1"
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
                        The core objective was to create a practical, structured, and visually appealing layout that a beginner web developer could easily understand and translate into code.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Learning Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-orange-500/20 relative shadow-2xl hover:border-orange-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-orange-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-orange-500/20 text-orange-500 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black border border-orange-500/50">!</span>
                                <span className="text-white font-bold tracking-wide">Challenge</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Designing for <br /> Development
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                When designing for someone learning web development, the layout needs to follow clear grid systems and logical structures. Complex, overlapping designs can be daunting, so the challenge was keeping it beautiful yet developer-friendly.
                            </p>
                        </div>

                        {/* Outcome Card */}
                        <div className="bg-[#1a1921]/80 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-purple-500/20 relative shadow-2xl mt-12 md:mt-0 hover:border-purple-500/40 transition-colors">
                            <div className="absolute -top-6 left-12 bg-[#121115] border border-purple-500/40 px-6 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
                                <span className="bg-purple-500/20 text-purple-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border border-purple-500/50">✓</span>
                                <span className="text-white font-bold tracking-wide">Implementation</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
                                Clean, Structured <br /> Layouts
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                I implemented a clear box-model approach in the design, clearly separating headers, hero sections, features, and footers. This made the design easy to interpret and provided me with a structured way to practice auto-layout and components in Figma.
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
                                Selected an engaging and vibrant color palette appropriate for a travel/trip theme. Established a clear typography hierarchy using modern fonts.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">02</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Components</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Designed foundational UI elements such as buttons, cards, and input fields. Ensuring they had consistent padding and margins for easy CSS translation.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">03</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Content Mapping</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Organized the actual content and imagery needed for the landing page to ensure the design accommodated real-world data effectively.
                            </p>
                        </div>

                        <div className="bg-[#16161a]/90 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group">
                            <span className="w-14 h-14 bg-[#c6f043] group-hover:bg-white transition-colors text-black font-black rounded-full flex items-center justify-center text-xl mb-8">04</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">Full Page Assembly</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Assembled the components and content into a cohesive, scrolling landing page layout, maintaining a consistent grid and visual rhythm.
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
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative bg-[#16161a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-2xl p-6 md:p-12"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
                            <img src="/DeshTripColors.png" alt="DeshTrip Color Palette" className="w-full h-auto rounded-2xl relative z-10 transform group-hover:scale-[1.02] transition duration-700" loading="lazy" />
                        </motion.div>
                        
                        {/* Typography */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative bg-[#16161a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-2xl p-6 md:p-12"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
                            <img src="/DeshTripTypography.png" alt="DeshTrip Typography" className="w-full h-auto rounded-2xl relative z-10 transform group-hover:scale-[1.02] transition duration-700" loading="lazy" />
                        </motion.div>

                        {/* Components */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative bg-[#16161a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-2xl p-6 md:p-12"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
                            <img src="/DeshTripComponents.png" alt="DeshTrip Components" className="w-full h-auto rounded-2xl relative z-10 transform group-hover:scale-[1.02] transition duration-700" loading="lazy" />
                        </motion.div>
                        
                        {/* Mockup 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative bg-gradient-to-b from-[#16161a]/90 to-[#101014]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden group shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)]"
                        >
                            <img src="/DeshtripMockup1.png" alt="DeshTrip Mockup 1" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-1000 relative z-10" loading="lazy" />
                        </motion.div>
                        
                        {/* Mockup 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative bg-gradient-to-b from-[#16161a]/90 to-[#101014]/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden group shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)]"
                        >
                            <img src="/DeshtripMockup2.png" alt="DeshTrip Mockup 2" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-1000 relative z-10" loading="lazy" />
                        </motion.div>
                    </div>

                </div>

                {/* Outcome */}
                <div className="max-w-4xl mx-auto text-center bg-[#16161a]/95 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <h2 className="font-tanker text-4xl md:text-5xl text-white tracking-widest mb-8 relative z-10">The Result</h2>
                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed relative z-10">
                        This collaborative exercise was a win-win. My friend received a structured, high-quality design to practice translating into code, while I <span className="text-white font-medium">deepened my understanding of Figma</span>, auto-layout constraints, and practical UI design principles.
                    </p>
                </div>
            </section>
        </main>
    )
}
