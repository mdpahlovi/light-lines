import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
    return (
        <div className="container pb-20">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-4xl tracking-tight font-bold">Our Blog</h2>
                <p className="font-light text-gray-500 sm:text-xl">
                    We use an agile approach to test assumptions and connect with the needs of your audience early and often.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 ">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
};

export default Blogs;
