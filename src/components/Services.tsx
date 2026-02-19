"use client"
import { motion } from "framer-motion"
import { ContainerScroll, CardSticky } from "@/components/ui/Cards-stack"

const SERVICES = [
    {
        id: "service-1",
        title: "UI Design",
        description:
            "Creating user-friendly interfaces and layouts using Figma and design principles.",
    },
    {
        id: "service-2",
        title: "UX Research",
        description:
            "Learning to conduct user research, wireframing, and prototyping for better experiences.",
    },
    {
        id: "service-3",
        title: "Web Design / Frontend Development",
        description:
            "Building responsive websites and web apps with HTML, CSS, JavaScript, and React.",
    },
    {
        id: "service-4",
        title: "Prototyping",
        description:
            "Designing interactive prototypes to visualize user flows and ideas.",
    },
    {
        id: "service-5",
        title: "Design Systems / Branding",
        description:
            "Creating consistent design systems and brand guidelines for cohesive digital experiences.",
    },
]


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const headingVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
}
export default function ServicesSection() {
    return (
        <section id="services" className="py-24 md:py-32 px-6 md:px-10">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 ">

                {/* LEFT — YOUR STYLE HEADING */}
                <motion.div variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} 
                    className="md:sticky md:top-32 md:h-fit">

                    <motion.h2
                        className=" font-tanker text-4xl sm:text-5xl md:text-6xl tracking-wide text-center md:text-left bg-clip-text text-transparent leading-tight"
                        style={{
                            backgroundImage:
                                "linear-gradient(0deg, rgba(99,111,164,0.5) 0%, rgb(232,203,192) 80%)",
                        }}
                        variants={headingVariants}
                    >
                        Services I Offer
                    </motion.h2>


                    <motion.p className=" font-space text-gray-400 mt-6 max-w-md text-center md:text-left text-base md:text-lg tracking-wide"
                    variants={paragraphVariants}
                    >
                        I help transform ideas into modern, scalable, and high-performance
                        digital products through thoughtful design and clean development.
                    </motion.p>

                </motion.div>



                {/* RIGHT — Sticky cards */}

                <ContainerScroll className="space-y-6">

                    {SERVICES.map((service, index) => (

                        <CardSticky
                            key={service.id}
                            index={index + 1}
                            className=" rounded-3xl border border-white/10 bg-[#24232A] shadow-[0_12px_40px_rgba(0,0,0,0.35)] p-8 md:p-10 hover:border-yellow-400/40 transition-all duration-500"
                        >

                            <div className="flex items-center justify-between">

                                <h3 className=" font-tanker text-2xl md:text-3xl tracking-wide">
                                    {service.title}
                                </h3>

                                <span className=" font-space text-yellow-400 text-lg">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                            </div>


                            <p className=" font-space text-gray-400 mt-4 text-base leading-relaxed max-w-md">
                                {service.description}
                            </p>

                        </CardSticky>
                    ))}

                </ContainerScroll>

            </div>

        </section>
    )
}
