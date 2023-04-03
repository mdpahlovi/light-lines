import AuthLayout from "@/layouts/AuthLayout";
import Image from "next/image";
import Link from "next/link";
import { ImGooglePlus3 } from "react-icons/im";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { useForm } from "react-hook-form";

export default function Login() {
    const { handleSubmit, register } = useForm();
    const handleLogin = (data) => {
        console.log(data);
    };

    return (
        <AuthLayout title="Login - Light Lines">
            <div
                className="absolute lg:hidden z-10 inset-0 bg-no-repeat bg-cover items-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
                }}
            >
                <div className="absolute bg-black/60 inset-0" />
            </div>
            <div className="absolute lg:static w-full h-full flex flex-col justify-center space-y-6 z-10 py-16 sm:px-16">
                <Image src="/logo.png" alt="" className="pb-2 mx-auto" width={255} height={40} />
                <div className="flex justify-center gap-8">
                    <ImGooglePlus3 size={32} />
                    <BsFacebook size={32} />
                    <BsGithub size={32} />
                </div>
                <p className="text-gray-100 text-center">or use email to login</p>
                <form onSubmit={handleSubmit(handleLogin)} className="w-full px-6 mx-auto space-y-4">
                    <input type="email" {...register("email")} placeholder="Email" className="input px-6 py-4 bg-black" />
                    <input type="password" {...register("password")} placeholder="Password" className="input px-6 py-4 bg-black" />
                    <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                        <Link href="/">Forgot your password?</Link>
                    </div>
                    <button type="submit" className="uppercase block w-full p-4 rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                        Log in
                    </button>
                </form>
            </div>
        </AuthLayout>
    );
}
