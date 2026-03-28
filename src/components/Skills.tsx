"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"

// ─── SKILLS DATA ──────────────────────────────────────────────────────────────
interface Skill {
    name: string
    icon: string
    color: string
}

const skills: Skill[] = [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#CCCCCC" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#CCCCCC" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
]

const TOTAL = skills.length
const ANGLE_STEP = 360 / TOTAL
const SPEED_NORMAL = 8     // °/s  — auto-rotate
const SPEED_HOVER = 2     // °/s  — slowed on hover


// ─── REVEAL ───────────────────────────────────────────────────────────────────
const reveal: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
}


// ─── COMPONENT ────────────────────────────────────────────────────────────────
// ─── EXPERTISE ACCORDION DATA & COMPONENT ──────────────────────────────────────
const expertiseData = [
    {
        title: "UX/UI Strategy",
        icon: "✦",
        desc: "Crafting intuitive and human-centered digital experiences from ground zero.",
        skills: ["User Research", "Wireframing", "Interaction Design", "Prototyping"],
        color: "from-yellow-400/20 to-orange-500/5",
        accent: "text-yellow-400"
    },
    {
        title: "Engineering",
        icon: "⚡",
        desc: "Translating pixel-perfect designs into high-performance, robust codebases.",
        skills: ["React & Next.js", "Tailwind CSS", "Responsive Architecture", "Redux State"],
        color: "from-blue-400/20 to-cyan-500/5",
        accent: "text-blue-400"
    },
    {
        title: "Systemization",
        icon: "✿",
        desc: "Building scalable and consistent visual languages for complex apps.",
        skills: ["Design Systems", "Component Libraries", "Agile Methodology", "No-Code Dev"],
        color: "from-pink-400/20 to-rose-500/5",
        accent: "text-pink-400"
    }
];

const ExpertiseAccordion = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="w-full max-w-7xl mx-auto mt-12 md:mt-20 px-4 md:px-10 lg:px-0">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="w-8 lg:w-16 h-[1px] bg-white/20"></div>
                <span className="font-space uppercase tracking-[0.2em] text-xs lg:text-sm text-gray-500 font-bold">Strategic Approach</span>
                <div className="w-8 lg:w-16 h-[1px] bg-white/20 lg:hidden"></div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full h-[680px] md:h-[600px] lg:h-[400px]">
                {expertiseData.map((exp, idx) => {
                    const isActive = active === idx;
                    return (
                        <div
                            key={idx}
                            onMouseEnter={() => { if (window.innerWidth >= 1024) setActive(idx) }}
                            onClick={() => setActive(idx)}
                            className="relative rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden cursor-pointer bg-[#16161a] border border-white/5 hover:border-white/20 group"
                            style={{
                                flex: isActive ? 3 : 1,
                                transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                            <div className="absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col justify-start z-10">
                                <div className="flex items-center gap-4 lg:gap-6">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shrink-0">
                                        <span className={`text-4xl lg:text-5xl ${exp.accent}`}>{exp.icon}</span>
                                    </div>
                                    <h3
                                        className={`font-tanker text-3xl lg:text-4xl text-white tracking-widest whitespace-nowrap transition-all duration-500 pt-1 lg:pt-2 ${isActive ? 'opacity-100' : 'opacity-100 lg:opacity-0'}`}
                                    >
                                        {exp.title}
                                    </h3>
                                </div>

                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="overflow-hidden mt-6 lg:mt-8"
                                        >
                                            <div className="w-full lg:w-[600px]">
                                                <p className="text-gray-400 font-space text-base lg:text-lg mb-8 max-w-xl leading-relaxed">
                                                    {exp.desc}
                                                </p>
                                                <div className="flex flex-wrap gap-2 lg:gap-4">
                                                    {exp.skills.map((skill, sIdx) => (
                                                        <span key={sIdx} className="px-4 py-2 lg:px-5 lg:py-2.5 rounded-full border border-white/10 bg-black/40 text-gray-300 font-space text-[10px] lg:text-sm whitespace-nowrap shadow-xl">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <h3
                                    className={`absolute left-8 lg:left-[5.5rem] bottom-10 font-tanker text-3xl lg:text-4xl text-white tracking-widest origin-bottom-left -rotate-90 hidden lg:block transition-all duration-500 whitespace-nowrap ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}`}
                                >
                                    {exp.title}
                                </h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default function Skills() {
    const [rotation, setRotation] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [radius, setRadius] = useState(360)
    const [cardSize, setCardSize] = useState(100)
    const rotRef = useRef(0)
    const rafRef = useRef<number>(0)
    const lastTimeRef = useRef<number | null>(null)
    const isInteracting = useRef(false)
    const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const dragStartX = useRef(0)
    const dragStartRot = useRef(0)
    const isHoveredRef = useRef(false)
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // ── Responsive radius ─────────────────────────────────────────────────────
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            if (w < 480) setRadius(200)
            else if (w < 768) setRadius(300)
            else if (w < 1200) setRadius(350)
            else setRadius(400)
        }
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    useEffect(() => {
        const update = () => {
            const base = window.innerWidth
            if (base < 480) setCardSize(70)
            else if (base < 768) setCardSize(90)
            else setCardSize(110)
        }
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])


    // ── Animation loop ────────────────────────────────────────────────────────
    const tick = useCallback((ts: number) => {
        if (!isInteracting.current) {
            if (lastTimeRef.current !== null) {
                const dt = (ts - lastTimeRef.current) / 1000
                const speed = isHoveredRef.current ? SPEED_HOVER : SPEED_NORMAL
                rotRef.current += speed * dt
                setRotation(rotRef.current)
            }
            lastTimeRef.current = ts
        } else {
            lastTimeRef.current = null
        }
        rafRef.current = requestAnimationFrame(tick)
    }, [])

    useEffect(() => {
        rafRef.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafRef.current)
    }, [tick])

    // ── Hover ─────────────────────────────────────────────────────────────────
    const onHoverStart = () => { isHoveredRef.current = true; setIsHovered(true) }
    const onHoverEnd = () => { isHoveredRef.current = false; setIsHovered(false) }

    // ── Drag ──────────────────────────────────────────────────────────────────
    const onPointerDown = useCallback((e: React.PointerEvent) => {
        if (resumeTimer.current) clearTimeout(resumeTimer.current)
        isInteracting.current = true
        setIsDragging(true)
        dragStartX.current = e.clientX
        dragStartRot.current = rotRef.current
            ; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    }, [])

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        if (!isInteracting.current) return
        const dx = e.clientX - dragStartX.current
        rotRef.current = dragStartRot.current + dx * 0.28
        setRotation(rotRef.current)
    }, [])

    const onPointerUp = useCallback(() => {
        setIsDragging(false)
        resumeTimer.current = setTimeout(() => {
            isInteracting.current = false
        }, 1200)
    }, [])

    // ── Container height = radius + top padding so only top half shows ────────
    const containerH = radius + 100   // show slightly more than the top half

    if (!mounted) return null;
    return (

        <section id="skills" className="py-16 md:py-18 px-6 md:px-10 w-full overflow-hidden">

            {/* ── HEADER ───────────────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    custom={0}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-center md:text-left"
                >
                    <div>
                        <h2
                            className="font-tanker text-4xl md:text-6xl tracking-wide bg-clip-text text-transparent leading-tight"
                            style={{ backgroundImage: "linear-gradient(0deg, rgba(99,111,164,0.5) 0%, rgb(232,203,192) 80.77%)" }}
                        >
                            Tools & Skills
                        </h2>
                        <p className="font-space text-gray-400 mt-4 max-w-md text-base md:text-lg tracking-wide mx-auto md:mx-0">
                            The software, languages, and methodologies I leverage natively to orchestrate premium experiences.
                        </p>
                    </div>


                </motion.div>
            </div>

            {/* ── ORBITAL STAGE ────────────────────────────────────────── */}
            <div className="w-[100vw] relative left-1/2 -translate-x-1/2 flex justify-center mt-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-[1200px] select-none"
                    style={{
                        height: `${containerH}px`, overflow: "hidden", WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
                    }}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerLeave={onPointerUp}
                    onMouseEnter={onHoverStart}
                    onMouseLeave={onHoverEnd}
                    data-cursor={isDragging ? "grabbing" : "grab"}
                >
                    {/* Cursor style via style tag trick */}
                    <style>{`
                    #skills-orbit { cursor: ${isDragging ? "grabbing" : "grab"}; }
                `}</style>


                    {/* Orbit ring */}
                    <div
                        className="absolute left-1/2 pointer-events-none"
                        style={{
                            top: `${containerH}px`,
                            width: radius * 2,
                            height: radius * 2,
                            marginLeft: -radius,
                            marginTop: -radius,
                            borderRadius: "50%",
                            border: "1px solid rgba(255,255,255,0.06)",
                            boxShadow: "0 0 60px 0 rgba(250,204,21,0.04)",
                        }}
                    />

                    {/* Skill icon cards */}
                    {skills.map((skill, i) => {
                        // angle: 0 = right, 90 = bottom (below container), 270 = top (12 o'clock)
                        const angleDeg = ((i * ANGLE_STEP + rotation - 90) % 360 + 360) % 360
                        const angleRad = (angleDeg * Math.PI) / 180

                        const x = Math.cos(angleRad) * radius
                        const y = Math.sin(angleRad) * radius   // positive = downward (below center)

                        // Only render icons in the visible upper arc (y < some threshold)
                        const isVisible = y < 30
                        const opacity = isVisible ? 1 : 0

                        return (
                            <div
                                key={skill.name}
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                className="absolute pointer-events-auto"
                                style={{
                                    left: "50%",
                                    top: `${containerH}px`,
                                    width: cardSize,
                                    height: cardSize,
                                    marginLeft: -(cardSize / 2),
                                    marginTop: -(cardSize / 2),
                                    transform: `translate(${x}px, ${y}px)`,
                                    opacity,
                                    transition: "opacity 0.25s ease",
                                    zIndex: 5,
                                    willChange: "transform, opacity",
                                }}
                            >
                                <div
                                    className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-2xl transition-all duration-300"
                                    style={{
                                        transform: hoveredSkill === skill.name ? "scale(1.25)" : "scale(1)",
                                        zIndex: hoveredSkill === skill.name ? 50 : 5,
                                        background: "rgba(36,35,42,0.85)",
                                        border: `1px solid ${skill.color}22`,
                                        boxShadow: hoveredSkill === skill.name
                                            ? `0 12px 40px ${skill.color}55`
                                            : `0 8px 28px ${skill.color}18`,
                                        backdropFilter: "blur(8px)",
                                    }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        draggable={false}
                                        className="object-contain transition-all duration-300"
                                        style={{
                                            width: hoveredSkill === skill.name ? 48 : 36,
                                            height: hoveredSkill === skill.name ? 48 : 36,
                                            filter: `drop-shadow(0 0 8px ${skill.color})`
                                        }}
                                    />
                                    <span
                                        className="font-space md:text-base text-[11px] tracking-wide text-center leading-tight px-2"
                                        style={{ color: "rgba(255, 255, 255, 0.92)" }}
                                    >
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>

            {/* ── CORE HTML/CSS EXPERTISE ───────────────────────────────────── */}
            <ExpertiseAccordion />
        </section>
    )
}
