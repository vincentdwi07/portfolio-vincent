'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const NavLinks = [
        {
            href: "/",
            name: "home"
        },
        {
            href: "#",
            name: "playground"
        },
        {
            href: "#",
            name: "about page"
        },
    ]

    const location = usePathname()
    return(
        <>
            <div className="max-w-[1440px] mx-auto top-0 left-0 right-0 p-10 fixed bg-transparent z-99 justify-between items-center flex">
                <h1
                    className="text-white font-bold text-xl "
                    style={{ fontFamily: "var(--font-space-mono)" }}  
                >
                    VINCENT
                </h1>
                <div
                    className="text-white gap-5 flex font-semibold uppercase"
                >
                    {NavLinks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`before:absolute before:bottom-0 before:h-[3px] before:w-full before:bg-white before:content-[''] transform before:origin-left before:scale-x-0 hover:before:scale-x-100 transition-all before:duration-300 relative ${location == item.href && "before:scale-x-100"}`}
                        >{item.name}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}