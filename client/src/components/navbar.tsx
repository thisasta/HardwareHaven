/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PCJi5iQigxf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export default function Navbar() {
    return (
        <header className="flex items-center justify-between h-16 px-6 bg-white shadow-sm dark:bg-gray-950">
            <div className="flex items-center gap-14">
                <Link className="flex items-center gap-2 font-semibold text-lg" href="#">
                    <CpuIcon className="w-6 h-6 text-primary" />
                    <span>HardwareHaven</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                        Products
                    </Link>
                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                        About
                    </Link>
                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                        Support
                    </Link>
                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                        Blog
                    </Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <Button className="relative" size="icon" variant="ghost">
                    <ShoppingCartIcon className="w-6 h-6" />
                    <Badge className="absolute -top-2 -right-2 bg-primary text-white px-1.5 py-0.5 text-xs rounded-full">3</Badge>
                </Button>
                <Avatar>
                    <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}

function CpuIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <rect width="6" height="6" x="9" y="9" rx="1" />
            <path d="M15 2v2" />
            <path d="M15 20v2" />
            <path d="M2 15h2" />
            <path d="M2 9h2" />
            <path d="M20 15h2" />
            <path d="M20 9h2" />
            <path d="M9 2v2" />
            <path d="M9 20v2" />
        </svg>
    )
}


function ShoppingCartIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}