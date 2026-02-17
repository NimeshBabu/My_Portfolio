"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "motion/react"
import { cn } from "@/lib/utils"

interface CardStickyProps extends HTMLMotionProps<"div"> {
    index: number
    incrementY?: number
    incrementZ?: number
}

const ContainerScroll = React.forwardRef<
    HTMLDivElement,
    React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("relative w-full min-h-[200vh]", className)}
            style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
                ...props.style,
            }}
            {...props}
        >
            {children}
        </div>
    )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
    (
        {
            index,
            incrementY = 24,
            incrementZ = 10,
            children,
            className,
            style,
            ...props
        },
        ref
    ) => {
        const BASE_OFFSET = 112 // 112px = top-28 in Tailwind

        const y = BASE_OFFSET + index * incrementY
        const z = index * incrementZ

        return (
            <motion.div
                ref={ref}
                layout="position"
                style={{
                    top: y,
                    transform: `translateZ(${z}px)`,
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                    ...style,
                }}
                className={cn("sticky", className)}
                {...props}
            >
                {children}
            </motion.div>
        )
    }
)

CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }