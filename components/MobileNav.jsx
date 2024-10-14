"use client";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button"; // Asegúrate de importar el botón

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Services',
        path: '/services',
    },
    {
        name: 'Resume',
        path: '/resume',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className="text-[32px] text-[#FF7A29]" />
            </SheetTrigger>
            <SheetContent>
                {/* Logo */}
                <div className='mt-32 mb-4 text-center text-2xl'>
                    <Link href="/">
                        <h1>
                            Nico<span className="text-[#FF7A29]">.</span>
                        </h1>
                    </Link>
                </div>
                {/* Botón Hire Me */}
                <div className='mb-8 text-center'>
                    <a
                        href="https://wa.me/+573008735048"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>Hire me</Button>
                    </a>
                </div>
                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathname ? "text-[#FF7A29] border-b-2 border-[#FF7A29]" : ""} text-xl capitalize hover:text-[#FF7A29] transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
