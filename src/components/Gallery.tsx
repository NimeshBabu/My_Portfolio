"use client"

import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

// Gallery item structure
interface GalleryItem {
    id: string
    title: string
    description: string
    category: "Social Media" | "Print & Branding"
    image: string
    tools: string[]
    aspectRatio: string // to assist with masonry spacing representation
}

const galleryItems: GalleryItem[] = [
    {
        id: "burger-design",
        title: "Burger Advertising Poster",
        description: "A mouth-watering marketing post designed to draw focus to composition, depth, and vibrant colors. The design leverages dynamic lighting and shadow manipulation to make the main product stand out.",
        category: "Social Media",
        image: "/Graphic Design/BurgurDesign.png",
        tools: ["Photoshop", "Figma"],
        aspectRatio: "aspect-[4/5]",
    },
    {
        id: "coffee-post",
        title: "Aesthetic Coffee Post",
        description: "A minimal and warm Instagram post design created to evoke comfort. Highlights typographic hierarchy and clean vector illustration elements for modern café branding.",
        category: "Social Media",
        image: "/Graphic Design/CofeePost.png",
        tools: ["Photoshop", "Illustrator"],
        aspectRatio: "aspect-[1/1]",
    },
    {
        id: "food-design",
        title: "Gourmet Banner Design",
        description: "An elegant promotional banner featuring rich textures, clean layout grids, and visual focus on organic ingredients. Designed with high-contrast color choices suitable for digital menus.",
        category: "Social Media",
        image: "/Graphic Design/Food Design.png",
        tools: ["Photoshop"],
        aspectRatio: "aspect-[4/5]",
    },
    {
        id: "flyer-design",
        title: "Corporate Event Flyer",
        description: "A professional and structured print flyer utilizing geometric layout grids. Emphasizes clean information hierarchy, legible typography paths, and functional brand representation.",
        category: "Print & Branding",
        image: "/Graphic Design/Flyer.png",
        tools: ["Illustrator"],
        aspectRatio: "aspect-[1/1.414]", // standard flyer ratio (A4)
    },
]

type FilterType = "All" | "Social Media" | "Print & Branding"

export default function Gallery() {
    const [filter, setFilter] = useState<FilterType>("All")
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const filteredItems = galleryItems.filter(
        (item) => filter === "All" || item.category === filter
    )

    // Handle Lightbox navigation
    const handlePrev = useCallback(() => {
        if (selectedIndex === null) return
        const newIndex = selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1
        setSelectedIndex(newIndex)
    }, [selectedIndex, filteredItems])

    const handleNext = useCallback(() => {
        if (selectedIndex === null) return
        const newIndex = selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1
        setSelectedIndex(newIndex)
    }, [selectedIndex, filteredItems])

    const handleClose = () => {
        setSelectedIndex(null)
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return
            if (e.key === "ArrowLeft") handlePrev()
            if (e.key === "ArrowRight") handleNext()
            if (e.key === "Escape") handleClose()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedIndex, handlePrev, handleNext])

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [selectedIndex])

    return (
        <section id="gallery" className="py-16 md:py-24 px-6 md:px-10 w-full text-white">
            <div className="max-w-7xl mx-auto">
                
                {/* HEADER & FILTER TABS */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2
                            className="font-tanker text-4xl text-center md:text-left md:text-6xl tracking-wide bg-clip-text text-transparent leading-tight"
                            style={{
                                backgroundImage:
                                    "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80%)",
                            }}
                        >
                            Graphic Showcase
                        </h2>
                        <p className="text-gray-400 mt-6 text-center md:text-left font-space max-w-md text-base md:text-lg tracking-wide">
                            A curated selection of poster designs, social media branding, and print assets focusing on visual balance, typography, and color harmony.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-[#24232A]/80 border border-white/5 backdrop-blur-md self-center md:self-end">
                        {(["All", "Social Media", "Print & Branding"] as FilterType[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setFilter(tab)
                                    setSelectedIndex(null) // reset selection when changing tabs
                                }}
                                className={`relative px-5 py-2 rounded-full font-space text-sm transition-all duration-300 ${
                                    filter === tab ? "text-black font-semibold" : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {filter === tab && (
                                    <motion.span
                                        layoutId="gallery-pill"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        className="absolute inset-0 bg-yellow-400 rounded-full"
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* MASONRY GRID */}
                <div className="columns-1 sm:columns-2 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
                    {filteredItems.map((item, index) => {
                        // Find the original index of this item in the master galleryItems list
                        const originalIndex = galleryItems.findIndex((g) => g.id === item.id)

                        return (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-[#24232A]/40 backdrop-blur-sm p-4 hover:border-yellow-400/40 hover:-translate-y-1.5 transition-all duration-500 shadow-xl"
                                onClick={() => setSelectedIndex(filteredItems.findIndex((i) => i.id === item.id))}
                            >
                                {/* Image Container */}
                                <div className={`relative overflow-hidden rounded-[1.5rem] ${item.aspectRatio} bg-black/10`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <div className="flex items-center justify-between">
                                            <span className="font-space text-xs tracking-wider text-yellow-400 uppercase bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/25">
                                                {item.category}
                                            </span>
                                            <div className="w-9 h-9 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <Maximize2 className="w-4 h-4" />
                                            </div>
                                        </div>
                                        <h3 className="font-tanker text-2xl tracking-wide text-white mt-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-lg"
                    >
                        {/* Close button top right */}
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 z-55 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-yellow-400/30 flex items-center justify-center hover:scale-105 transition-all text-white hover:text-yellow-400"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Lightbox Panel */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            onClick={(e) => e.stopPropagation()} // prevent modal close on clicking content
                            className="relative max-w-6xl w-full bg-[#16161A]/95 border border-white/15 rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh]"
                        >
                            
                            {/* Visual Display (Left / Top) */}
                            <div className="relative md:col-span-7 bg-black/40 flex items-center justify-center min-h-[300px] md:min-h-0 md:h-[80vh] overflow-hidden p-6">
                                <img
                                    src={filteredItems[selectedIndex].image}
                                    alt={filteredItems[selectedIndex].title}
                                    className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain rounded-xl shadow-2xl"
                                />

                                {/* Side Navigation Buttons (Internal to Visual Display) */}
                                <div className="absolute inset-x-4 flex items-center justify-between pointer-events-none">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handlePrev()
                                        }}
                                        className="pointer-events-auto w-11 h-11 rounded-full bg-black/60 border border-white/10 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition-all text-white shadow-lg"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleNext()
                                        }}
                                        className="pointer-events-auto w-11 h-11 rounded-full bg-black/60 border border-white/10 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition-all text-white shadow-lg"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Details (Right / Bottom) */}
                            <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-full border-t md:border-t-0 md:border-l border-white/10">
                                <div>
                                    {/* Category Tag */}
                                    <div className="mb-4">
                                        <span className="font-space text-xs tracking-widest text-yellow-400 uppercase bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/25">
                                            {filteredItems[selectedIndex].category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="font-tanker text-3xl md:text-4xl tracking-wide bg-clip-text text-transparent leading-tight mb-4"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80%)",
                                        }}
                                    >
                                        {filteredItems[selectedIndex].title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-space text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                                        {filteredItems[selectedIndex].description}
                                    </p>

                                    {/* Tools Used */}
                                    <div className="mb-6">
                                        <h4 className="font-space text-xs tracking-wider text-gray-500 uppercase mb-3">Tools Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {filteredItems[selectedIndex].tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="font-space text-xs px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-300"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Lightbox Navigation indicator */}
                                <div className="flex items-center justify-between text-xs text-gray-500 font-space mt-6 border-t border-white/5 pt-4">
                                    <span>Use ← and → arrow keys to navigate</span>
                                    <span>
                                        {selectedIndex + 1} / {filteredItems.length}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
