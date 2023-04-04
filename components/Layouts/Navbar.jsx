import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();
    console.log(user);

    return (
        <nav className="bg-gray-900 py-4">
            <div className="container flex flex-wrap items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" alt="" className="w-48 xs:w-56" width={255} height={40} />
                </Link>
                <div className="flex lg:order-2 gap-4">
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 flex items-center pl-3 pointer-events-none">
                            <HiOutlineSearch size={20} className="text-white" />
                        </div>
                        <input type="text" className="input pl-11" placeholder="Search..." />
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden icon-button button-light">
                        {isOpen ? <MdOutlineClose size={20} /> : <HiOutlineMenu size={20} />}
                    </button>
                </div>
                <div className={`items-center justify-between ${isOpen ? "" : "hidden"} w-full lg:flex lg:w-auto lg:order-1" id="navbar-search`}>
                    <div className="relative mt-3 lg:hidden">
                        <div className="absolute inset-0 flex items-center pl-3 pointer-events-none">
                            <HiOutlineSearch size={20} className="text-white" />
                        </div>
                        <input type="text" className="input pl-11" placeholder="Search..." />
                    </div>
                    <div className="flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:gap-x-8 lg:mt-0 lg:border-0 bg-gray-800 lg:bg-gray-900 border-gray-700">
                        <Link href="/" className="nav-link active-link">
                            Home
                        </Link>
                        <Link href="/" className="nav-link">
                            About
                        </Link>
                        <Link href="/" className="nav-link">
                            Services
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
