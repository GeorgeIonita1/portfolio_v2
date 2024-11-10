import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconHome,
    IconBrandLinkedin
} from "@tabler/icons-react";

export function FloatingDockCustom() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <div className="flex items-center justify-center">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
