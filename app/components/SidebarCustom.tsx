"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody } from "./ui/sidebar";
import {
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import { FloatingDockCustom } from "./FloatingDockCustom";

export function SidebarCustom({ sidebarContent }: { sidebarContent: any }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="bg-gray-100 dark:bg-neutral-800 md:ml-[300px]"
        >
            <Sidebar open={open} setOpen={setOpen} animate={false}>
                <SidebarBody>
                    <div className="flex flex-col items-center gap-14">
                        <Link
                            href="#"
                            className="font-normal relative z-20"
                        >
                            <BackgroundGradient className="rounded-full" containerClassName="aspect-square flex justify-center items-center w-[200px]">
                                <Image alt="George Ionita" src="/Avatar_sample.jpg" width={200} height={200} className="rounded-full aspect-square object-cover" />
                            </BackgroundGradient>
                        </Link>
                        <FloatingDockCustom />
                    </div>
                </SidebarBody>
            </Sidebar>
            {sidebarContent}
        </div>
    );

};
