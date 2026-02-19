"use client"

import { motion } from "framer-motion"

export default function DashboardCaseStudy() {
    return (
        <main className="text-white px-6 md:px-10 py-24">

            {/* HERO */}
            <section className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-tanker text-4xl md:text-6xl tracking-wide"
                >
                    Teacher Dashboard Redesign
                </motion.h1>

                <p className="mt-6 text-gray-400 text-lg max-w-3xl font-space">
                    A redesign focused on improving data clarity and usability
                    for 3,000+ institute users.
                </p>

                <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-500 font-space">
                    <span>Role: UI/UX Designer</span>
                    <span>Timeline: 2025</span>
                    <span>Scope: UX Research · UI Design</span>
                </div>
            </section>

            {/* HERO IMAGE */}
            <section className="max-w-7xl mx-auto mt-16">
                <div className="rounded-3xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600"
                        alt="Dashboard preview"
                        className="w-full object-cover"
                    />
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="max-w-7xl mx-auto mt-24 space-y-8">
                <h2 className="font-tanker text-3xl">Overview</h2>
                <p className="text-gray-400 font-space leading-relaxed">
                    The existing dashboard lacked hierarchy and made it difficult
                    for teachers to interpret performance data quickly.
                    The goal was to simplify navigation and improve data visibility.
                </p>
            </section>

            {/* PROBLEM */}
            <section className="max-w-7xl mx-auto mt-20 space-y-8">
                <h2 className="font-tanker text-3xl">Problem</h2>
                <p className="text-gray-400 font-space leading-relaxed">
                    Teachers struggled with cluttered layouts, unclear metrics,
                    and inefficient workflows.
                </p>
            </section>

            {/* PROCESS */}
            <section className="max-w-7xl mx-auto mt-20 space-y-8">
                <h2 className="font-tanker text-3xl">Process</h2>
                <ul className="text-gray-400 font-space space-y-4">
                    <li>• Conducted user interviews</li>
                    <li>• Created wireframes</li>
                    <li>• Built high-fidelity prototypes</li>
                    <li>• Iterated based on usability testing</li>
                </ul>
            </section>

            {/* SOLUTION */}
            <section className="max-w-7xl mx-auto mt-20 space-y-8">
                <h2 className="font-tanker text-3xl">Solution</h2>
                <p className="text-gray-400 font-space leading-relaxed">
                    Introduced modular card-based layout, improved hierarchy,
                    and implemented clearer data visualizations.
                </p>
            </section>

            {/* RESULTS */}
            <section className="max-w-7xl mx-auto mt-20 space-y-8">
                <h2 className="font-tanker text-3xl">Results</h2>
                <p className="text-gray-400 font-space leading-relaxed">
                    Increased task efficiency and improved satisfaction among
                    3,000+ users.
                </p>
            </section>

        </main>
    )
}
