import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        author: String,
        title: String,
        description: String,
        url: String,
        source: String,
        image: String,
    },
    { timestamps: true }
);

export const Blog = mongoose.models.blog || mongoose.model("blog", blogSchema);
