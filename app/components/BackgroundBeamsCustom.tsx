"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TypewriterEffectCustom } from "./TypewritterEffectCustom";
import { FloatingDockCustom } from "./FloatingDockCustom";

export function BackgroundBeamsCustom() {
    return (
        <div className="h-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <div>
                    <TypewriterEffectCustom />
                </div>
            </div>
            <FloatingDockCustom />
            <BackgroundBeams />
        </div>
    );
}
