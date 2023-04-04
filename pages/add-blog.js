import Main from "@/layouts/Main";
import { useForm } from "react-hook-form";

const AddBlog = () => {
    const { handleSubmit, register } = useForm();
    const handleAddBlog = ({ data }) => {};

    return (
        <Main className="container py-20">
            <form onSubmit={handleSubmit(handleAddBlog)} className="max-w-2xl mx-auto space-y-4">
                <div className="flex gap-4">
                    <input type="text" {...register("source")} placeholder="Source" className="input input-light" />
                    <input type="text" {...register("url")} placeholder="Main URI" className="input input-light" />
                </div>
                <input type="text" {...register("title")} placeholder="Title" className="input input-light" />
                <input type="password" {...register("description")} placeholder="Description" className="input input-light" />
                <button type="submit" className="button text-white p-4">
                    Submit
                </button>
            </form>
        </Main>
    );
};

export default AddBlog;
