"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
    {
        title: "Teacher Dashboard Redesign",
        impact: "Improved data clarity for 3,000+ institute users.",
        process: "UX Research · UI Design",
        timeline: "2025",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        link: "/case-study/dashboard",
        size: "large",
    },
    {
        title: "AI Learning Platform",
        impact: "Designed scalable interaction system for AI workflows.",
        process: "Product Strategy · Interaction Design",
        timeline: "2025",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
        link: "/case-study/ai-platform",
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
        title: "SaaS Onboarding Flow",
        impact: "Increased completion rate with guided UX patterns.",
        process: "User Flows · Prototyping",
        timeline: "2025",
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
        link: "/case-study/onboarding",
        size: "wide",
    },
]

const reveal = {
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

export default function Projects() {
    return (
        <section id="projects" className="text-white py-24 md:py-32 px-6 md:px-10 w-full">

            <div className="max-w-7xl mx-auto">

                {/* HEADER ROW */}
                <div className="flex flex-col text-center md:text-justify md:flex-row md:items-end md:justify-between mb-16 gap-6">

                    {/* Title */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        custom={0}
                    >
                        <h2
                            className="font-tanker text-4xl text-center md:text-left md:text-6xl tracking-wide bg-clip-text text-transparent leading-tight"
                            style={{
                                backgroundImage:
                                    "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80.7661%)",
                            }}
                        >
                            Selected Work
                        </h2>

                        <p className="text-gray-400 mt-6 text-center md:text-left font-space max-w-md text-base md:text-lg tracking-wide">
                            A curated selection of design and development projects focused on usability, scalability, and crafting meaningful user experiences.
                        </p>
                    </motion.div>

                    {/* Button occupying empty grid space */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        custom={projects.length}
                        className="flex items-end justify-center md:col-span-1"
                    >
                        <Link href="/projects">
                            <div className="relative inline-block group">

                                {/* SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29"
                                    height="27"
                                    fill="none"
                                    className="absolute -top-5 -right-6 pointer-events-none group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
                                >
                                    <path
                                        stroke="#F9D34C"
                                        strokeLinecap="round"
                                        strokeWidth="3"
                                        d="M9.06 17.3c.084-1.992 3.262-3.654 4.461-4.963a145.227 145.227 0 0 1 5.708-5.896c1.038-1.012 2.874-2.345 3.018-3.823m-8.392 22.144c4.297-.43 8.438-1.897 12.804-1.897M2 2v9.958"
                                    />
                                </svg>

                                {/* Button */}
                                <button
                                    className=" px-7 py-3 rounded-2xl bg-yellow-400 text-black font-space font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(250,204,21,0.35)] active:scale-95"
                                >
                                    View All Projects
                                </button>

                            </div>
                        </Link>
                    </motion.div>

                </div>


                {/* GRID */}
                {/* PROJECT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-20 ">

                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
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

        </section>
    )
}
