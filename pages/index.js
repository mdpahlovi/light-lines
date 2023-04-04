import Blogs from "@/components/Home/Blogs";
import Hero from "@/components/Home/Hero";

import Main from "@/layouts/Main";

export default function Home() {
    return (
        <Main>
            <Hero />
            <Blogs />
        </Main>
    );
}
