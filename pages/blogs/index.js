import BlogCard from "@/components/Blogs/BlogCard";
import Main from "@/layouts/Main";
import axios from "axios";
import { CirclesWithBar } from "react-loader-spinner";
import { useQuery } from "react-query";

const Blogs = () => {
    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ["blog"],
        queryFn: () => axios.get("/api/blog").then((res) => res.data),
    });
    return (
        <Main className="container py-20">
            {isLoading ? (
                <div className="flex justify-center items-center">
                    <CirclesWithBar height="160" width="160" color="#362c75" />
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog?._id} blog={blog} />
                    ))}
                </div>
            )}
        </Main>
    );
};

export default Blogs;
