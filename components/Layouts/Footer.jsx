import Image from "next/image";
import Link from "next/link";
import { IoCall, IoMail } from "react-icons/io5";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container m-auto space-y-5 text-gray-600 dark:text-gray-300">
                <Image src="/logo.png" alt="" className="w-48 xs:w-56 mx-auto" width={100} height={100} />
                <ul role="list" className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8">
                    <Link href="/" className="hover:text-primary">
                        Home
                    </Link>
                    <Link href="/" className="hover:text-primary">
                        Features
                    </Link>
                    <Link href="/" className="hover:text-primary">
                        Get started
                    </Link>
                    <Link href="/" className="hover:text-primary">
                        About us
                    </Link>
                </ul>
                <div className="m-auto flex w-max items-center justify-between space-x-4">
                    <a href="tel:+243996660436" aria-label="call">
                        <IoCall size={20} />
                    </a>
                    <a href="mailto:hello@mail.com" aria-label="send mail">
                        <IoMail size={20} />
                    </a>
                    <a href="https://www.facebook.com/pahlovi07" target="_blank">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/mdpahlovi/" target="_blank">
                        <FaLinkedin size={20} />
                    </a>
                </div>
                <div className="text-center">
                    <span className="text-sm tracking-wide">Copyright © Light Lines {year} | All right reserved</span>
                </div>
            </div>
        </footer>
    );
}
