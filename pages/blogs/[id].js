import Main from "@/layouts/Main";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/router";
import { CirclesWithBar } from "react-loader-spinner";
import { useQuery } from "react-query";
import { MdOutlineEditNote } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

const BlogDetails = () => {
    const { query } = useRouter();

    const { data: blog = {}, isLoading } = useQuery({
        queryKey: ["blog", query?.id],
        queryFn: () => axios.get(`/api/blog/${query?.id}`).then((res) => res.data),
    });
    if (isLoading) {
        return (
            <Main className="container py-20 flex justify-center items-center">
                <CirclesWithBar height="160" width="160" color="#362c75" />
            </Main>
        );
    } else {
        const { image, title, source, author, updatedAt, description, url } = blog;

        const date = format(parseISO(updatedAt), "PPPPpp");
        return (
            <Main>
                <div
                    className="bg-no-repeat bg-cover bg-center relative flex items-center text-white"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <div className="absolute bg-black/60 inset-0" />
                    <div className="container z-10 py-48">
                        <p className="text-lg mb-4">
                            Published in <span className="font-semibold">{source}</span>
                        </p>
                        <h2 className="max-w-4xl text-4xl font-bold tracking-tight">{title}</h2>
                    </div>
                </div>
                <div className="relative -mt-32 container z-20">
                    <div className="sm:mx-6 mb-20 p-8 bg-white shadow-lg rounded-2xl">
                        <div className="flex justify-between items-center gap-6">
                            <p className="text-lg">
                                By <span className="font-semibold">{author}</span> • {date}
                            </p>
                            <p className="flex gap-4">
                                <MdOutlineEditNote size={24} />
                                <a href={url} target="_blank">
                                    <AiOutlineLink size={24} />
                                </a>
                            </p>
                        </div>
                        <p className="mt-4">{description}</p>
                    </div>
                </div>
            </Main>
        );
    }
};

export default BlogDetails;
