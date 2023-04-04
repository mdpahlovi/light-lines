import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const BlogCard = ({ blog }) => {
    const { _id, image, title, description } = blog;
    return (
        <Link href={`/blogs/${_id}`} className="group relative transition border rounded-lg hover:shadow-lg p-6">
            <Image src={image} alt="" className="aspect-[4_/_3]" width={512} height={512} />
            <div className="mt-2.5 space-y-2">
                <h5 className="max-h-16 overflow-hidden text-2xl font-bold tracking-tight transition group-hover:text-indigo-500">{title}</h5>
                <p className="max-h-36 overflow-hidden text-gray-500">{description}</p>
            </div>
            <div className="mt-2.5 flex font-medium items-center justify-between group-hover:text-indigo-500">
                <span>Read more</span>
                <HiOutlineArrowSmallRight
                    size={24}
                    className="-translate-x-4 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
            </div>
        </Link>
    );
};

export default BlogCard;
