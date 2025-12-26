"use client";

import { useState, useEffect } from "react";
import Intro from "./intro";
import Approach from "@/app/pages/approach";
import IntroProfile from "./pages/intro";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedinFilled className="grayscale w-full h-full" />
      ),
      href: "https://www.linkedin.com/in/mrizainf/"
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="grayscale w-full h-full" />
      ),
      href: "https://www.instagram.com/rizainfird/"
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="grayscale w-full h-full" />
      ),
      href: "https://github.com/inRiza"
    },
    {
      title: "Email",
      icon: (
        <IconMail className="grayscale w-full h-full" />
      ),
      href: "#"
    },
  ];

  return (
    <>
      {showIntro && <Intro onComplete={handleIntroComplete} />}

      {isLoaded && (
        <div
          className={`flex flex-col min-h-screen px-4 md:px-22 overflow-visible font-sans transition-opacity duration-500 ${showIntro ? "opacity-0" : "opacity-100"
            }`}
        >
          <FloatingDock 
            items={links} 
            desktopClassName="fixed z-50 bottom-[30px] left-1/2 -translate-x-1/2"
            mobileClassName="fixed z-50 bottom-[30px] right-[30px]" 
          />
          <IntroProfile className="mb-10" />
          <Approach className="py-10 md:py-20" />
          <footer className="flex font-light text-muted-foreground py-10 items-center justify-center text-center text-sm md:text-base">
            CC @ 2025 by inRiza / Created using Next.js and Typescript
          </footer>
        </div>
      )}
    </>
  );
}
