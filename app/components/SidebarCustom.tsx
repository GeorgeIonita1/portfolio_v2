"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

export function SidebarCustom({ sidebarContent }: { sidebarContent: any }) {
    const links = [
        {
            label: "Home",
            href: "#",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Experience",
            href: "#experience",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Contact",
            href: "#contact",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        <div
            className="bg-gray-100 dark:bg-neutral-800 flex-1 border border-neutral-200 dark:border-neutral-700 md:ml-[300px] max-md:flex max-md:flex-col"
        >
            <Sidebar open={open} setOpen={setOpen} animate={false}>
                <SidebarBody>
                    <div className="flex flex-col pt-16 gap-8">
                        <Logo />
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                </SidebarBody>
            </Sidebar>
            <Dashboard sidebarContent={sidebarContent} />
        </div>
    );
}
export const Logo = () => {
    return (
        <Link
            href="#"
            className="font-normal flex justify-center relative z-20"
        >
            <BackgroundGradient className="bg-white dark:bg-zinc-900 rounded-full">
                <Image alt="George Ionita" src="/Avatar_sample.jpg" width={200} height={200} className="rounded-full aspect-square object-cover" />
            </BackgroundGradient>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>
    );
};

// Dummy dashboard component with content
const Dashboard = ({ sidebarContent }: { sidebarContent: any }) => {
    return (
        <div>
            {sidebarContent}
        </div>
    );
};
