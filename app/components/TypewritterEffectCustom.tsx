"use client";
import { FloatingDockCustom } from "./FloatingDockCustom";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmootCustom() {
    const words = [
        {
            text: "Let's",
        },
        {
            text: "keep",
        },
        {
            text: "in",
        },
        {
            text: "touch.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <TypewriterEffectSmooth words={words} />
            <FloatingDockCustom />
        </div>
    );
}
