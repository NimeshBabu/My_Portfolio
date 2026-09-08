"use client"

import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { galleryItems } from "@/data/galleryData"

export default function GraphicDesignPage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    // Handle Lightbox navigation
    const handlePrev = useCallback(() => {
        if (selectedIndex === null) return
        const newIndex = selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1
        setSelectedIndex(newIndex)
    }, [selectedIndex])

    const handleNext = useCallback(() => {
        if (selectedIndex === null) return
        const newIndex = selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1
        setSelectedIndex(newIndex)
    }, [selectedIndex])

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
        <div className="min-h-screen text-white">
            <Navbar />
            <main className="pt-32 pb-24 px-6 md:px-10 w-full">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="mb-12">
                        <div>
                            <h1
                                className="font-tanker text-4xl md:text-6xl tracking-wide bg-clip-text text-transparent leading-tight"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80.7661%)",
                                }}
                            >
                                Graphic Design Showcase
                            </h1>
                            <p className="text-gray-400 mt-4 font-space max-w-xl text-base md:text-lg tracking-wide">
                                Explore the full collection of posters, social media banners, brand identity, and print design assets crafted with precision and visual harmony.
                            </p>
                        </div>
                    </div>

                    {/* MASONRY GRID SHOWCASE */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-[#24232A]/40 backdrop-blur-sm p-4 hover:border-yellow-400/40 hover:-translate-y-1.5 transition-all duration-500 shadow-xl"
                                onClick={() => setSelectedIndex(index)}
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <div className="flex items-center justify-end">
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
                        ))}
                    </div>
                </div>
            </main>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedIndex !== null && galleryItems[selectedIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-lg"
                    >
                        {/* Close button */}
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
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-6xl w-full bg-[#16161A]/95 border border-white/15 rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh]"
                        >
                            {/* Visual Display */}
                            <div className="relative md:col-span-7 bg-black/40 flex items-center justify-center min-h-[300px] md:min-h-0 md:h-[80vh] overflow-hidden p-6">
                                <img
                                    src={galleryItems[selectedIndex].image}
                                    alt={galleryItems[selectedIndex].title}
                                    className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain rounded-xl shadow-2xl"
                                />

                                {/* Side Navigation Buttons */}
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

                            {/* Details Column */}
                            <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-full border-t md:border-t-0 md:border-l border-white/10">
                                <div>
                                    {/* Title */}
                                    <h3
                                        className="font-tanker text-3xl md:text-4xl tracking-wide bg-clip-text text-transparent leading-tight mb-4"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(0deg, rgba(99, 111, 164, 0.5) 0%, rgb(232, 203, 192) 80%)",
                                        }}
                                    >
                                        {galleryItems[selectedIndex].title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-space text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                                        {galleryItems[selectedIndex].description}
                                    </p>

                                    {/* Tools Used */}
                                    <div className="mb-6">
                                        <h4 className="font-space text-xs tracking-wider text-gray-500 uppercase mb-3">Tools Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {galleryItems[selectedIndex].tools.map((tool) => (
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
                                        {selectedIndex + 1} / {galleryItems.length}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
