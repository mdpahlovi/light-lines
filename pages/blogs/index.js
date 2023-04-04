import BlogCard from "@/components/Blogs/BlogCard";
import Main from "@/layouts/Main";
import { useQuery } from "react-query";

const Blogs = () => {
    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ["blog"],
        queryFn: () => axios.get("/api/blog").then((res) => res.data),
    });
    return (
        <Main className="container py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
                <BlogCard key={blog?._id} blog={blog} />
            ))}
        </Main>
    );
};

export default Blogs;
