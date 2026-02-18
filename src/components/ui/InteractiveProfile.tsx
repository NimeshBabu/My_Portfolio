import Image from 'next/image';
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const InteractiveProfile: React.FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150 };
    const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), springConfig);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            id="profile-container"
            className="relative w-[300px] h-[340px] md:w-[480px] md:h-[580px] flex-shrink-0 cursor-none custom-cursor-area"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
            }}
        >
            <motion.div
                className="absolute top-[-6%] -right-2 sm:-right-6 md:top-[-10%] md:-right-5 w-20 h-20 sm:w-22 sm:h-22 md:w-48 md:h-48 -z-20 pointer-events-none "
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <Image
                    src="/bird.png"
                    alt="Noodles"
                    width={192}
                    height={192}
                    className="w-full h-full object-contain"

                />
            </motion.div>
            {/* Dynamic Animated Blob Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-pink-500/20 to-indigo-600/30 blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Profile Image with Dynamic Blob Clip-Path */}
            <motion.div
                className="w-full h-full relative z-10"
                animate={{
                    borderRadius: [
                        "40% 60% 70% 30% / 40% 50% 60% 50%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "40% 60% 70% 30% / 40% 50% 60% 50%"
                    ]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    backgroundImage: "url('/photo.jpg')", // Placeholder for /Nimesh.jpg
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                    overflow: "hidden"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FFD747] rounded-full mix-blend-screen blur-md opacity-40 z-0"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.div>
    );
};

export default InteractiveProfile;
