"use client"

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

export default function ServicesSection() {
    return (
        <section className="py-15 sm:py-17 md:py-18 lg:py-20 px-6 md:px-8 ">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 ">

                {/* LEFT — YOUR STYLE HEADING */}
                <div className="md:sticky md:top-32 md:h-fit">

                    <h2
                        className="
                            font-tanker
                            text-4xl sm:text-5xl md:text-6xl
                            tracking-wide
                            bg-clip-text text-transparent
                            leading-tight
                        "
                        style={{
                            backgroundImage:
                                "linear-gradient(0deg, rgba(99,111,164,0.5) 0%, rgb(232,203,192) 80%)",
                        }}
                    >
                        Services I Offer
                    </h2>


                    <p className="
                        font-space
                        text-gray-400
                        mt-6
                        max-w-md
                        text-base md:text-lg
                        tracking-wide
                    ">
                        I help transform ideas into modern, scalable, and high-performance
                        digital products through thoughtful design and clean development.
                    </p>

                </div>



                {/* RIGHT — Sticky cards */}

                    <ContainerScroll className="space-y-6">

                        {SERVICES.map((service, index) => (

                            <CardSticky
                                key={service.id}
                                index={index + 1}
                                className="
                                rounded-3xl
                                border border-white/10
                                bg-white/[0.04]
                                backdrop-blur-xl
                                p-8 md:p-10
                                hover:border-yellow-400/40
                                transition-all duration-500
                            "
                            >

                                <div className="flex items-center justify-between">

                                    <h3 className="
                                    font-tanker
                                    text-2xl md:text-3xl
                                    tracking-wide
                                ">
                                        {service.title}
                                    </h3>

                                    <span className="
                                    font-space
                                    text-yellow-400
                                    text-lg
                                ">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>


                                <p className="
                                font-space
                                text-gray-400
                                mt-4
                                text-base
                                leading-relaxed
                                max-w-md
                            ">
                                    {service.description}
                                </p>


                                {/* subtle glow */}
                                <div className="
                                absolute inset-0 opacity-0 hover:opacity-100
                                transition duration-500
                                bg-[radial-gradient(circle_at_80%_50%,rgba(250,204,21,0.15),transparent_60%)]
                                pointer-events-none
                            "/>

                            </CardSticky>
                        ))}

                    </ContainerScroll>

            </div>

        </section>
    )
}
