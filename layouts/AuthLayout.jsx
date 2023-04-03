import Head from "next/head";

export default function AuthLayout({ children, title = "Login - Light Lines" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <section className="min-h-screen flex items-stretch text-white">
                <div
                    className="lg:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
                    }}
                >
                    <div className="absolute bg-black/60 inset-0" />
                    <div className="w-full px-20 z-10">
                        <h1 className="text-5xl font-bold tracking-wide">Keep it special</h1>
                        <p className="text-3xl mt-4">Capture your personal memory in unique way, anywhere.</p>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full bg-[#161616]">{children}</div>
            </section>
        </>
    );
}
