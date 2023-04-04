import Main from "@/layouts/Main";
import { GoCloudUpload } from "react-icons/go";
import { useForm } from "react-hook-form";

const AddBlog = () => {
    const { handleSubmit, register } = useForm();
    const handleAddBlog = ({ data }) => {};

    return (
        <Main className="container py-20">
            <div className="max-w-2xl mx-auto mb-4 flex items-center justify-center">
                <label
                    htmlFor="file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <GoCloudUpload size={40} className="mb-3 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="file" type="file" className="hidden" />
                </label>
            </div>
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
