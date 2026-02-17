"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
    {
        title: "Teacher Dashboard Redesign",
        impact: "Improved data clarity for 3,000+ institute users.",
        process: "UX Research · UI Design",
        timeline: "2025 · 4 Weeks",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        link: "/case-study/dashboard",
        size: "large",
    },
    {
        title: "AI Learning Platform",
        impact: "Designed scalable interaction system for AI workflows.",
        process: "Product Strategy · Interaction Design",
        timeline: "2025 · 6 Weeks",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
        link: "/case-study/ai-platform",
    },
    {
        title: "Analytics UX Overhaul",
        impact: "Reduced cognitive load through better hierarchy.",
        process: "UX Audit · Wireframing",
        timeline: "2025 · 3 Weeks",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        link: "/case-study/analytics",
    },
    {
        title: "SaaS Onboarding Flow",
        impact: "Increased completion rate with guided UX patterns.",
        process: "User Flows · Prototyping",
        timeline: "2025 · 5 Weeks",
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

export default function BentoProjects() {
    return (
        <section className="text-white py-15 sm:py-17 md:py-18 lg:py-20 px-6 md:px-8 w-full">

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

                        <p className="text-gray-400 mt-4 text-center md:text-left font-space text-[15px] md:text-[20px] max-w-md tracking-wide text-sm md:text-base">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

                    {projects.map((project, i) => {

                        const size =
                            project.size === "large"
                                ? "md:col-span-2 md:row-span-2"
                                : project.size === "wide"
                                    ? "md:col-span-3"
                                    : ""

                        return (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={reveal}
                                className={size}
                            >

                                <Link href={project.link}>

                                    <div className="
                                        group relative h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:border-yellow-400/40 hover:shadow-[0_20px_80px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-500 cursor-pointer
                                    ">

                                        {/* IMAGE */}
                                        <div className="absolute inset-0 overflow-hidden">

                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-70 scale-100 group-hover:scale-110 transition duration-700
                                                "
                                            />

                                            {/* gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent
                                            " />

                                            {/* glow */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_50%_120%,rgba(250,204,21,0.25),transparent_60%)]
                                            " />

                                        </div>


                                        {/* CONTENT */}
                                        <div className="relative h-full flex flex-col justify-end p-7">

                                            <h3 className="font-tanker text-2xl md:text-3xl tracking-wide
                                            ">
                                                {project.title}
                                            </h3>


                                            <p className="font-space text-gray-300 mt-3 text-md max-w-sm
                                            ">
                                                {project.impact}
                                            </p>


                                            <div className=" mt-5 text-sm text-gray-400 font-space
                                            ">
                                                <p>{project.process}</p>
                                                <p className="mt-1">
                                                    {project.timeline}
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                </Link>

                            </motion.div>
                        )
                    })}
                </div>

            </div>

        </section>
    )
}
