import BlogCard from "@/components/Blogs/BlogCard";
import Main from "@/layouts/Main";

const Blogs = () => {
    return (
        <Main className="container py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </Main>
    );
};

export default Blogs;
