"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody } from "./ui/sidebar";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconBrandGithub, IconBrandLinkedin, IconHome, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export function SidebarCustom({ sidebarContent }: { sidebarContent: any }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="bg-gray-100 dark:bg-neutral-800 md:ml-[300px]"
        >
            <Sidebar open={open} setOpen={setOpen} animate={false}>
                <SidebarBody>
                    <BackgroundGradient className="rounded-full" containerClassName="aspect-square flex justify-center items-center w-[200px]">
                        <Image alt="George Ionita" src="/Avatar_sample.jpg" width={200} height={200} className="rounded-full aspect-square object-cover" />
                    </BackgroundGradient>
                    <div className="grid grid-cols-2 gap-2">
                        <Link href='#' onClick={() => setOpen(false)}>
                            <IconHome width={30} height={30} />
                        </Link>
                        <ExternalButton url="https://google.com">
                            <IconBrandGithub width={30} height={30} />
                        </ExternalButton>
                        <ExternalButton url="https://youtube.com">
                            <IconBrandLinkedin width={30} height={30} />
                        </ExternalButton>
                        <ExternalButton url="https://google.ro">
                            <IconUser width={30} height={30} />
                        </ExternalButton>
                    </div>
                </SidebarBody>
            </Sidebar>
            {sidebarContent}
        </div>
    );
};

function ExternalButton({ children, url }: { children: any, url: string }) {
    return (
        <a href={url} target="_blank">
            {children}
        </a>
    );
}