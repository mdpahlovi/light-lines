import Link from "next/link";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const BlogCard = ({ blog }) => {
    const { _id, author, title, description, source } = blog;
    return (
        <Link href={`/blogs/${_id}`} className="group p-6 rounded-lg border border-gray-300 shadow-md">
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="text-sm font-medium">{source}</span>
                <span className="text-sm">14 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight group-hover:text-indigo-500">{title}</h2>
            <p className="mb-5 font-light text-gray-500">{description}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img
                        className="w-7 h-7 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt="Jese Leos avatar"
                    />
                    <span className="font-medium">{author}</span>
                </div>
                <Link href={`/blogs/${_id}`} className="inline-flex items-center font-medium group-hover:text-indigo-500 group-hover:underline gap-2">
                    Read more
                    <HiOutlineArrowSmallRight size={20} />
                </Link>
            </div>
        </Link>
    );
};

export default BlogCard;
