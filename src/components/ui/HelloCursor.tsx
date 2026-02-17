"use client";

import { useEffect, useState } from "react";

export default function HelloCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const container = document.getElementById("profile-container");

        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        const enter = () => setVisible(true);
        const leave = () => setVisible(false);

        if (container) {
            container.addEventListener("mousemove", move);
            container.addEventListener("mouseenter", enter);
            container.addEventListener("mouseleave", leave);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", move);
                container.removeEventListener("mouseenter", enter);
                container.removeEventListener("mouseleave", leave);
            }
        };
    }, []);

    return (
        <div
            className={`
                fixed top-0 left-0 z-[9999]
                pointer-events-none
                transition-opacity duration-200 hidden md:block
                ${visible ? "opacity-100" : "opacity-0"}
            `}
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
            }}
        >
            <div className="bg-yellow-400 text-black font-space font-semibold font-sans text-base uppercase px-6 py-3 rounded-full shadow-lg whitespace-nowrap bg-white/20 backdrop-blur-md border border-white/30">
                Hello :)
            </div>
        </div>
    );
}
