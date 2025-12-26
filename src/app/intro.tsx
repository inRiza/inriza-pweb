"use client";

import { useEffect, useState } from "react";

interface IntroProps {
    onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const text = "@inRiza";

    useEffect(() => {
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        const fadeOutTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 2500);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3500);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(fadeOutTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${isFadingOut ? "opacity-0" : "opacity-100"
                }`}
        >
            <h1 className="relative overflow-hidden text-center">
                {text.split("").map((letter, index) => (
                    <span
                        key={index}
                        className="inline-block text-5xl tracking-tight text-white opacity-0 md:text-7xl lg:text-8xl"
                        style={{
                            animation: isVisible
                                ? `letterFadeIn 0.6s ease-out forwards`
                                : "none",
                            animationDelay: `${index * 0.1}s`,
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </h1>

            <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ${isVisible && !isFadingOut ? "opacity-100" : "opacity-0"
                    }`}
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
                }}
            />
        </div>
    );
}