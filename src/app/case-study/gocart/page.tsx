"use client"

import { motion } from "framer-motion"

export default function GoCartCaseStudy() {
    return (
        <main className="text-white px-6 md:px-10 py-24 mt-24">

            {/* HERO */}
            <section className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-tanker text-4xl md:text-6xl tracking-wide bg-clip-text text-transparent"
                    style={{
                        backgroundImage: "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80.7661%)"
                    }}
                >
                    GoCart E-Commerce Platform
                </motion.h1>

                <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl font-space leading-relaxed">
                    A modern, robust e-commerce experience designed to delight shoppers
                    and empower vendors with premium gadgets and smart accessories.
                    This platform was developed as a 6th-semester Bsc.CSIT college project.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 md:gap-8 text-sm md:text-base text-gray-500 font-space bg-[#24232A] p-6 rounded-2xl border border-white/5 w-fit">
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-400 uppercase text-xs font-bold tracking-widest">Role</span>
                        <span className="text-white">Full Stack Dev & UI/UX</span>
                    </div>
                    <div className="w-px bg-white/10 hidden md:block"></div>
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-400 uppercase text-xs font-bold tracking-widest">Timeline</span>
                        <span className="text-white">2025</span>
                    </div>
                    <div className="w-px bg-white/10 hidden md:block"></div>
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-400 uppercase text-xs font-bold tracking-widest">Scope</span>
                        <span className="text-white">E-Commerce · Product Strategy</span>
                    </div>
                </div>
            </section>

            {/* HERO IMAGE */}
            <section className="max-w-7xl mx-auto mt-16">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-yellow-400/5 group relative">
                    <img
                        src="/Gocart.png"
                        alt="GoCart Platform Preview"
                        className="w-full h-auto object-cover transform duration-1000 group-hover:scale-105"
                    />
                    {/* Fallback styling placeholder logic if image isn't available */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="max-w-7xl mx-auto mt-24 space-y-8">
                <h2 className="font-tanker text-3xl md:text-4xl text-yellow-400">Overview</h2>
                <div className="h-0.5 w-12 bg-yellow-400 rounded-full mb-6"></div>
                <p className="text-gray-400 font-space leading-relaxed text-lg md:text-justify md:text-left max-w-5xl">
                    GoCart is a comprehensive digital marketplace aiming to streamline how users discover and purchase electronics, fashion, and home goods.
                    Beyond a standard storefront, it features specialized seller tools ("Create Your Store") and premium loyalty options ("Plus Member").
                    The overarching goal was to deliver an intuitive, lightning-fast, and frictionless journey from initial product discovery to secure payment.
                </p>
            </section>

            {/* PROBLEM */}
            <section className="max-w-7xl mx-auto mt-20 space-y-8">
                <h2 className="font-tanker text-3xl md:text-4xl">Problem</h2>
                <p className="text-gray-400 font-space leading-relaxed text-lg md:text-justify md:text-left max-w-5xl">
                    Modern consumers demand lightning-fast performance, clear categorization, and trustworthy vendor ecosystems.
                    Many existing solutions suffer from cluttered layouts, unclear product highlighting, and cumbersome checkout flows, resulting in high cart abandonment and poor shopper retention.
                </p>
            </section>

            {/* PROCESS */}
            <section className="max-w-7xl mx-auto mt-20 space-y-8">
                <h2 className="font-tanker text-3xl md:text-4xl">Process</h2>
                <ul className="text-gray-400 font-space space-y-8 text-lg max-w-5xl">
                    <li className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                        <span className="text-yellow-400 font-tanker text-2xl md:text-3xl shrink-0">01</span>
                        <div>
                            <span className="text-white font-medium text-xl block mb-2">Research & Architecture</span>
                            Analyzed the competitive landscape of digital marketplaces and mapped out the essential user workflows spanning shopping categories, membership onboarding, and vendor creation modules.
                        </div>
                    </li>
                    <li className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                        <span className="text-yellow-400 font-tanker text-2xl md:text-3xl shrink-0">02</span>
                        <div>
                            <span className="text-white font-medium text-xl block mb-2">Wireframing & Prototyping</span>
                            Sketched modular UI components to ensure seamless scaling of product inventory and promotional banners (e.g., dynamic "20% off discounts", "Free Delivery" badges).
                        </div>
                    </li>
                    <li className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                        <span className="text-yellow-400 font-tanker text-2xl md:text-3xl shrink-0">03</span>
                        <div>
                            <span className="text-white font-medium text-xl block mb-2">UI/UX Design</span>
                            Established a clean, modern aesthetic utilizing high-contrast typography and subtle hover animations for responsive interactivity that captivates and guides user focus.
                        </div>
                    </li>
                </ul>
            </section>

            {/* SOLUTION */}
            <section className="max-w-7xl mx-auto mt-24 space-y-8 bg-[#1f1e24] p-8 md:p-12 rounded-3xl border border-white/5">
                <h2 className="font-tanker text-3xl md:text-4xl">Solution</h2>
                <p className="text-gray-400 font-space leading-relaxed text-lg md:text-justify md:text-left max-w-4xl">
                    I developed a scalable multi-vendor architecture featuring robust filtering mechanisms by category (Electronics, Beauty, Sports).
                    The design emphasizes clear calls-to-action ("Add to Cart", "Become Plus Member") and instills buyer confidence through distinct sections indicating "Free Delivery", "Easy Returns", and "Secure Payment".
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="group overflow-hidden rounded-2xl border border-white/10">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800" alt="Payment processing" className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                    </div>
                    <div className="group overflow-hidden rounded-2xl border border-white/10">
                        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800" alt="Mobile responsive design" className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                    </div>
                </div>
            </section>

            {/* RESULTS */}
            <section className="max-w-7xl mx-auto mt-24 mb-32 space-y-8">
                <h2 className="font-tanker text-3xl md:text-4xl text-yellow-500">Results</h2>
                <div className="h-0.5 w-12 bg-yellow-500 rounded-full mb-6"></div>
                <p className="text-gray-400 font-space leading-relaxed text-lg md:text-justify md:text-left max-w-5xl">
                    GoCart successfully established a premium brand identity capable of competing in the modern e-commerce landscape.
                    The structured product layout drives higher product visibility and user engagement, while the integrated vendor tools set a highly scalable foundation for platform growth.
                </p>
                <div className="mt-12 flex justify-center md:justify-start">
                    <a href="https://gocart-rosy.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-space font-medium tracking-wide transition-all hover:scale-105 hover:shadow-[0_10px_40px_rgba(250,204,21,0.35)]">
                        Visit Live App
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </a>
                </div>
            </section>

        </main>
    )
}
