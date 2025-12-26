"use client";

import { cn } from "@/lib/utils";
import Lanyard from "@/components/ui/lanyard";
import Mount from "@/assets/mountworkspace_logo.jpeg";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { useEffect, useState } from "react";

interface ExperienceItem {
    company: string;
    role: string;
    stacks: string;
    description: string;
}

const experiences: ExperienceItem[] = [
    {
        company: "Bank Central of Indonesia",
        role: "Software Architecture Engineer",
        stacks: "-",
        description: "DPID"
    },
    {
        company: "ARKAVIDIA",
        role: "Software Engineer - Backend",
        stacks: "Fiber, Go, Hureg, Huma, OpenAPI, REST",
        description: "Developed robust backend services using Go and Fiber, implementing RESTful APIs and ensuring high performance."
    },
    {
        company: "Inkubator IT",
        role: "Software Developer Engineer",
        stacks: "React, Next, Typescript, Vercel, Prisma, Hono",
        description: "Built full-stack web applications utilizing the Next.js ecosystem, Prisma for ORM, and deployed on Vercel."
    },
    {
        company: "VICII",
        role: "Lead Software Engineer",
        stacks: "Next, Hono, Typescript, MongoDB, Prisma, GraphQL",
        description: "Led the engineering team in developing modern web solutions, overseeing the tech stack including MongoDB and GraphQL."
    },
    {
        company: "HMIF",
        role: "Software Developer - Frontend",
        stacks: "Vue, Hono, Typescript, Swagger, ShadCN",
        description: "Focused on frontend development with Vue.js and TypeScript, creating interactive user interfaces and integrating with backend APIs."
    },
    {
        company: "BAWASLU RI",
        role: "UI/UX",
        stacks: "Figma",
        description: "Designed user-centric interfaces and experiences for government applications using Figma."
    },
    {
        company: "Parade Wisuda Oktober 2023 HMIF",
        role: "UI/UX",
        stacks: "Figma",
        description: "Created visual designs and prototypes for the graduation parade event, ensuring a cohesive visual identity."
    }
];

export default function IntroProfile({ className }: { className?: string }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="/" className={cn(className, "w-full min-h-screen relative")}>
            <div className="absolute top-0 left-[calc(-50vw+50%)] w-screen min-h-screen">
                <Lanyard 
                    position={[0, 0, 20]} 
                    gravity={[0, -40, 0]} 
                    offset={isMobile ? [0, 0, 0] : [6, 6, 0]} 
                    textureImage="/card.png" 
                    textureScale={isMobile ? [1.5, 1] : [2, 1.3]} 
                    textureOffset={[0.5, 0.15]}
                />
            </div>
            <div className="flex flex-col w-full h-full pt-20 relative z-30 pointer-events-none px-4 md:px-62">
                <div className="flex flex-col gap-2 items-center mb-13 pointer-events-auto text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <h1 className="text-3xl md:text-4xl text-foreground">
                            Muhammad Rizain Firdaus
                        </h1>
                        <ModeToggle className="text-foreground" />
                    </div>
                    <p className="flex flex-col md:flex-row gap-2 items-center text-lg md:text-xl text-muted-foreground">
                        Building Mount <Image src={Mount} alt="Mount Workspace Logo" className="w-6 h-auto rounded-lg border border-border" /> | Software Engineer | Product Design
                    </p>
                </div>
                
                {experiences.map((exp, index) => (
                    <div key={index} className="flex flex-col mt-10 group pointer-events-auto transition-all duration-200">
                        <div className="flex flex-col md:flex-row items-start justify-between w-full cursor-pointer gap-2 md:gap-0">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-xl md:text-2xl text-foreground transition-colors">
                                    {exp.company}
                                </h1>
                                <h2 className="text-muted-foreground/60 text-sm md:text-base">
                                    {exp.role}
                                </h2>
                            </div>
                            <div className="flex">
                                <p className="text-muted-foreground/60 text-left md:text-right text-sm md:text-base">
                                    {exp.stacks}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                            <div className="overflow-hidden">
                                <p className="pt-4 text-muted-foreground text-sm">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}