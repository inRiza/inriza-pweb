"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

export default function DottedBG() {
    const { resolvedTheme } = useTheme();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [mounted, setMounted] = useState(false);

    const isDark = resolvedTheme === "dark";
    const glowColor = isDark ? "rgba(255, 200, 216, 0.1)" : "rgba(255, 200, 216, 0.25)";
    
    const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`;

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    if (!mounted) {
        return (
            <div className="fixed inset-0 h-screen w-full items-center justify-center bg-white dark:bg-black">
                <div
                    className={cn(
                        "absolute inset-0",
                        "bg-size-[20px_20px]",
                        "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
                        "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
                    )}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 h-screen w-full items-center justify-center bg-white dark:bg-black transition-colors duration-300">
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-size-[20px_20px]",
                    "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
                )}
            />
            
            {/* Glow Effect Layer */}
            <motion.div
                className="pointer-events-none absolute inset-0 transition-colors duration-300"
                style={{
                    background: background,
                }}
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
        </div>
    );
}
