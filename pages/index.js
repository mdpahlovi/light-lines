import Blogs from "@/components/Home/Blogs";
import Hero from "@/components/Home/Hero";
import Main from "@/layouts/Main";
import axios from "axios";
import { useQuery } from "react-query";

export default function Home() {
    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ["blog"],
        queryFn: () => axios.get("/api/blog").then((res) => res.data),
    });

    return (
        <Main>
            <Hero />
            <Blogs blogs={blogs} isLoading={isLoading} />
        </Main>
    );
}
