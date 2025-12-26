"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
  text: string;
  className?: string;
  /**
   * Time in milliseconds between revealing each subsequent real character.
   * Lower is faster. Defaults to 50ms per character.
   */
  revealDelayMs?: number;
  /** Optional custom character set to use for the gibberish effect. */
  charset?: string;
  /**
   * Time in milliseconds between gibberish flips for unrevealed characters.
   * Lower is more jittery. Defaults to 50ms.
   */
  flipDelayMs?: number;
  /** CSS class for styling the encrypted/scrambled characters */
  encryptedClassName?: string;
  /** CSS class for styling the revealed characters */
  revealedClassName?: string;
  /** If true, the animation will loop continuously. Defaults to false. */
  loop?: boolean;
  /** Time in milliseconds to pause between encryption/decryption cycles. Defaults to 2000ms. */
  pauseMs?: number;
};

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset: string): string {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

function generateGibberishPreservingSpaces(
  original: string,
  charset: string,
): string {
  if (!original) return "";
  let result = "";
  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    result += ch === " " ? " " : generateRandomCharacter(charset);
  }
  return result;
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
  loop = false,
  pauseMs = 2000,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: !loop });

  // "encrypting" = scrambling back, "decrypting" = revealing
  const [phase, setPhase] = useState<"decrypting" | "revealed" | "encrypting" | "encrypted">("encrypted");
  const [revealCount, setRevealCount] = useState<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const lastFlipTimeRef = useRef<number>(0);
  const scrambleCharsRef = useRef<string[]>(
    text ? generateGibberishPreservingSpaces(text, charset).split("") : [],
  );

  useEffect(() => {
    if (!isInView) return;

    let isCancelled = false;
    let pauseTimeout: NodeJS.Timeout | null = null;

    const startDecrypting = () => {
      if (isCancelled) return;
      const initial = text
        ? generateGibberishPreservingSpaces(text, charset)
        : "";
      scrambleCharsRef.current = initial.split("");
      startTimeRef.current = performance.now();
      lastFlipTimeRef.current = startTimeRef.current;
      setRevealCount(0);
      setPhase("decrypting");
      animationFrameRef.current = requestAnimationFrame(updateDecrypt);
    };

    const startEncrypting = () => {
      if (isCancelled) return;
      startTimeRef.current = performance.now();
      lastFlipTimeRef.current = startTimeRef.current;
      setRevealCount(text.length);
      setPhase("encrypting");
      animationFrameRef.current = requestAnimationFrame(updateEncrypt);
    };

    const updateDecrypt = (now: number) => {
      if (isCancelled) return;

      const elapsedMs = now - startTimeRef.current;
      const totalLength = text.length;
      const currentRevealCount = Math.min(
        totalLength,
        Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
      );

      setRevealCount(currentRevealCount);

      if (currentRevealCount >= totalLength) {
        setPhase("revealed");
        if (loop) {
          pauseTimeout = setTimeout(() => {
            startEncrypting();
          }, pauseMs);
        }
        return;
      }

      // Re-randomize unrevealed scramble characters on an interval
      const timeSinceLastFlip = now - lastFlipTimeRef.current;
      if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
        for (let index = 0; index < totalLength; index += 1) {
          if (index >= currentRevealCount) {
            if (text[index] !== " ") {
              scrambleCharsRef.current[index] =
                generateRandomCharacter(charset);
            } else {
              scrambleCharsRef.current[index] = " ";
            }
          }
        }
        lastFlipTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(updateDecrypt);
    };

    const updateEncrypt = (now: number) => {
      if (isCancelled) return;

      const elapsedMs = now - startTimeRef.current;
      const totalLength = text.length;
      const encryptedCount = Math.min(
        totalLength,
        Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
      );
      const currentRevealCount = Math.max(0, totalLength - encryptedCount);

      setRevealCount(currentRevealCount);

      // Re-randomize encrypted characters
      const timeSinceLastFlip = now - lastFlipTimeRef.current;
      if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
        for (let index = 0; index < totalLength; index += 1) {
          if (index >= currentRevealCount) {
            if (text[index] !== " ") {
              scrambleCharsRef.current[index] =
                generateRandomCharacter(charset);
            } else {
              scrambleCharsRef.current[index] = " ";
            }
          }
        }
        lastFlipTimeRef.current = now;
      }

      if (currentRevealCount <= 0) {
        setPhase("encrypted");
        if (loop) {
          pauseTimeout = setTimeout(() => {
            startDecrypting();
          }, pauseMs);
        }
        return;
      }

      animationFrameRef.current = requestAnimationFrame(updateEncrypt);
    };

    // Start the initial decryption
    startDecrypting();

    return () => {
      isCancelled = true;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (pauseTimeout !== null) {
        clearTimeout(pauseTimeout);
      }
    };
  }, [isInView, text, revealDelayMs, charset, flipDelayMs, loop, pauseMs]);

  if (!text) return null;

  return (
    <motion.span
      ref={ref}
      className={cn(className)}
      aria-label={text}
      role="text"
    >
      {text.split("").map((char, index) => {
        const isRevealed = index < revealCount;
        const displayChar = isRevealed
          ? char
          : char === " "
            ? " "
            : (scrambleCharsRef.current[index] ??
              generateRandomCharacter(charset));

        return (
          <span
            key={index}
            className={cn(isRevealed ? revealedClassName : encryptedClassName)}
          >
            {displayChar}
          </span>
        );
      })}
    </motion.span>
  );
};
