import Main from "@/layouts/Main";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useState } from "react";

const AddBlog = () => {
    const router = useRouter();
    const { authUser } = useAuth();
    const [loading, setLoading] = useState(false);

    const { handleSubmit, register } = useForm();
    const handleAddBlog = (data) => {
        setLoading(true);
        data.author = authUser?.displayName;
        axios
            .post("/api/blog", data)
            .then((res) => {
                if (res?.data?.acknowledge) {
                    setLoading(false);
                    router.replace("/blogs");
                }
            })
            .catch(({ message }) => console.error(message));
    };

    return (
        <Main className="container py-20">
            <form onSubmit={handleSubmit(handleAddBlog)} className="max-w-2xl mx-auto space-y-4">
                <div className="flex gap-4">
                    <input type="text" {...register("source")} placeholder="Source" className="input input-light" />
                    <input type="text" {...register("url")} placeholder="Main URI" className="input input-light" />
                </div>
                <input type="text" {...register("image")} placeholder="Title" className="input input-light" />

                <input type="text" {...register("title")} placeholder="Title" className="input input-light" />
                <textarea rows="6" {...register("description")} placeholder="Description" className="input input-light"></textarea>
                <button type="submit" className="button text-white p-4">
                    {loading ? "Loading..." : "Submit"}
                </button>
            </form>
        </Main>
    );
};

export default AddBlog;
