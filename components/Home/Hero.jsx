import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
    return (
        <section className="container">
            <div className="py-20 gap-12 overflow-hidden lg:flex items-center">
                <div className="flex-none space-y-5 max-w-xl">
                    <Link
                        href="/blogs"
                        className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
                    >
                        <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">News</span>
                        <p className="flex items-center gap-2">
                            Read the launch post from here
                            <MdOutlineKeyboardArrowRight size={24} />
                        </p>
                    </Link>
                    <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">Build your SaaS exactly how you want</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                    <div className="flex flex-col xs:flex-row xs:items-center gap-x-3 sm:text-sm">
                        <button className="button xs:w-max text-white">
                            Get Started
                            <MdOutlineKeyboardArrowRight size={24} />
                        </button>
                        <button className="button xs:w-max bg-white hover:bg-gray-300">
                            Contact Sales
                            <MdOutlineKeyboardArrowRight size={24} />
                        </button>
                    </div>
                </div>
                <div className="flex-1 hidden lg:block">
                    <Image
                        src="https://res.cloudinary.com/floatui/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669333920/undraw_progressive_app_m-9-ms_oftfv5.jpg"
                        alt=""
                        className="min-w-[32rem]"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
