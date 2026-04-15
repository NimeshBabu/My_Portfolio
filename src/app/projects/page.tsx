"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/Navbar"

const projects = [
    {
        title: "GoCart",
        impact: "Scalable multi-vendor platform featuring frictionless checkout and premium layouts.",
        process: "E-Commerce · UI/UX Design",
        timeline: "2025",
        image:
            "/Gocart.png",
        link: "/case-study/gocart",
    },
    {
        title: "Nexora Biopharma",
        impact: "Reduced user search time by 45% with intelligent rendering and clean architecture.",
        process: "Product Strategy · Interaction Design",
        timeline: "2025",
        image:
            "/Nexorabiopharma.png",
        link: "/case-study/Nexorabiopharma",
    },
    {
        title: "Analytics UX Overhaul",
        impact: "Reduced cognitive load through better hierarchy.",
        process: "UX Audit · Wireframing",
        timeline: "2025",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        link: "/case-study/analytics",
    },
    {
        title: "Color Harmony Generator",
        impact: "Fast, elegant app providing precise palettes using local geometric logic.",
        process: "User Flows · Prototyping",
        timeline: "2025",
        image:
            "/ColorHarmony.png",
        link: "/case-study/colorharmony",
    },
]

const reveal: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.08,
            ease: "easeOut",
        },
    }),
}

export default function AllProjects() {
    return (
        <div className="min-h-screen text-white">
            <Navbar />
            <main className="pt-32 pb-16 px-6 md:px-10 w-full">
                <div className="max-w-7xl mx-auto">
                    
                    {/* HEADER */}
                    <div className="mb-16">
                        
                        
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={reveal}
                            custom={0}
                        >
                            <h1 
                                className="font-tanker text-4xl md:text-6xl tracking-wide bg-clip-text text-transparent leading-tight inline-block"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80.7661%)",
                                }}
                            >
                                All Projects
                            </h1>
                            <p className="text-gray-400 mt-4 font-space md:max-w-md text-base md:text-lg tracking-wide">
                                A complete collection of my design and development work.
                            </p>
                        </motion.div>
                    </div>

                    {/* PROJECT GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={reveal}
                                className="group relative bg-[#24232A] border border-white/5 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:border-yellow-400/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                            >
                                <Link href={project.link}>
                                    <div className="space-y-6">
                                        {/* Image */}
                                        <div className="relative overflow-hidden rounded-2xl">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-[320px] md:h-[380px] object-cover transition duration-700 group-hover:scale-[1.03]"
                                            />
                                        </div>

                                        {/* Bottom Meta Row */}
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                                            {/* Left Side */}
                                            <div className="space-y-4 max-w-xl">
                                                <div className="md:hidden text-sm text-gray-500 font-space tracking-wide">
                                                    <div>{project.timeline}</div>
                                                </div>
                                                <h3 className="font-tanker text-2xl md:text-3xl tracking-wide">
                                                    {project.title}
                                                </h3>

                                                <div className="flex flex-wrap gap-2">
                                                    {project.process.split("·").map((item, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="inline-block px-3 py-1 rounded-full bg-[#2F3132] text-[#999999] uppercase text-xs md:text-sm font-medium font-space"
                                                        >
                                                            {item.trim()}
                                                        </span>
                                                    ))}
                                                </div>
                                                <p className="font-space text-gray-400 text-sm md:text-base leading-relaxed">
                                                    {project.impact}
                                                </p>
                                            </div>
                                            {/* Right Side */}
                                            <div className="hidden md:block text-sm text-gray-500 font-space tracking-wide">
                                                <div>{project.timeline}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
