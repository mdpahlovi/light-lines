import { formatDistance, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const BlogCard = ({ blog }) => {
    const { _id, author, title, description, source, updatedAt } = blog;
    const distance = formatDistance(parseISO(updatedAt), new Date());

    return (
        <Link href={`/blogs/${_id}`} className="group p-6 rounded-lg border border-gray-300 shadow-md">
            <div className="flex justify-between items-center mb-2.5 text-gray-500">
                <span className="text-sm font-medium">{source}</span>
                <span className="text-sm">{distance}</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight group-hover:text-indigo-500">{title.slice(0, 44) + " " + "..."}</h2>
            <p className="mb-4 font-light text-gray-500">{description.slice(0, 224) + " " + "..."}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Image className="rounded-full" src="/icons/avatar.png" alt="" width={28} height={28} />
                    <span className="font-medium">{author}</span>
                </div>
                <div className="inline-flex items-center font-medium group-hover:text-indigo-500 group-hover:underline gap-2">
                    Read more
                    <HiOutlineArrowSmallRight size={20} />
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
