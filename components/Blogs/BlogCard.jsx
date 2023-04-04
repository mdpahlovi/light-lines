import Link from "next/link";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const BlogCard = () => {
    return (
        <div className="group relative transition border rounded-lg hover:shadow-lg space-y-5 p-6">
            <img src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" className="w-12" alt="burger illustration" width={512} height={512} />
            <div className="space-y-2">
                <h5 className="text-2xl font-bold tracking-tight transition group-hover:text-blue-500">First feature</h5>
                <p className="text-gray-500">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
            </div>
            <Link href="/" className="flex font-medium items-center justify-between group-hover:text-blue-500">
                <span>Read more</span>
                <HiOutlineArrowSmallRight
                    size={24}
                    className="-translate-x-4 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
            </Link>
        </div>
    );
};

export default BlogCard;
