import Link from "next/link";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { RiDeleteBin5Fill, RiEditFill } from "react-icons/ri";

const BlogCard = ({ blog, handleDelete }) => {
    const { _id, image, title, description } = blog;
    return (
        <div className="group relative transition border rounded-lg hover:shadow-lg p-6">
            <div className="absolute top-6 right-6 translate-x-10 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 flex flex-col gap-4">
                <button className="p-2.5 bg-white rounded-full hover:shadow hover:shadow-white">
                    <RiEditFill size={16} />
                </button>
                <button onClick={() => handleDelete(_id)} className="p-2.5 bg-white rounded-full hover:shadow hover:shadow-white">
                    <RiDeleteBin5Fill size={16} />
                </button>
            </div>
            <img src={image} alt="" className="aspect-[4_/_3]" width={512} height={512} />
            <div className="mt-2.5 space-y-2">
                <h5 className="max-h-16 overflow-hidden text-2xl font-bold tracking-tight transition group-hover:text-indigo-500">{title}</h5>
                <p className="max-h-36 overflow-hidden text-gray-500">{description}</p>
            </div>
            <Link href={`/blogs/${_id}`} className="mt-2.5 flex font-medium items-center justify-between group-hover:text-indigo-500">
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
