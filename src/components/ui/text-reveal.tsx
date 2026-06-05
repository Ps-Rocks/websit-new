"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end end'],
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[120vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-screen max-w-6xl items-center bg-transparent px-[1rem] py-[3rem]"
        }
      >
        <p
          className={
            "flex flex-wrap p-5 text-3xl font-black leading-tight tracking-tight text-neutral-300 dark:text-white/20 md:p-8 md:text-5xl lg:p-10 lg:text-7xl xl:text-8xl"
          }
        >
          {words.map((word, i) => {
            const start = 0.05 + (i / words.length) * 0.75;
            const end = start + (1 / words.length) * 0.75;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-10 text-neutral-400 dark:text-white"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-[#2c3e2d] dark:text-[#10b981]"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
