import AuthLayout from "@/layouts/AuthLayout";
import Link from "next/link";
import { ImGooglePlus3 } from "react-icons/im";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    const { loading, setLoading, login, loginWithGoogle, loginWithGithub } = useAuth();
    const { handleSubmit, register } = useForm();
    const handleLogin = ({ email, password }) => {
        login(email, password)
            .then(({ user }) => {
                router.replace("/");
            })
            .catch(({ message }) => {
                console.error(message);
                setLoading(false);
            });
    };

    //google handler function
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(({ user }) => {
                router.replace("/");
            })
            .catch(({ message }) => {
                console.error(message);
                setLoading(false);
            });
    };
    //github handler function
    const handleGithubLogin = () => {
        loginWithGithub()
            .then(({ user }) => {
                router.replace("/");
            })
            .catch(({ message }) => {
                console.error(message);
                setLoading(false);
            });
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
            <div className="absolute lg:static w-full h-full flex flex-col justify-center space-y-6 z-10 py-16 px-6 sm:px-16">
                <div className="mt-5 space-y-2">
                    <h3 className="font-bold text-3xl">Log in</h3>
                    <p className="">
                        If don&apos;t have any account?
                        <Link href="/signup" className="ml-2 font-medium text-indigo-500 hover:text-indigo-600">
                            Sign up
                        </Link>
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div onClick={handleGoogleLogin} className="border p-2.5 rounded-2xl">
                        <ImGooglePlus3 size={32} className="mx-auto" />
                    </div>
                    <div className="border p-2.5 rounded-2xl">
                        <BsFacebook size={32} className="mx-auto" />
                    </div>
                    <div onClick={handleGithubLogin} className="border p-2.5 rounded-2xl">
                        <BsGithub size={32} className="mx-auto" />
                    </div>
                </div>
                <p className="text-gray-100 text-center">or use email to login</p>
                <form onSubmit={handleSubmit(handleLogin)} className="w-full mx-auto space-y-4">
                    <input type="email" {...register("email")} placeholder="Email" className="input input-dark" />
                    <input type="password" {...register("password")} placeholder="Password" className="input input-dark" />
                    <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                        <Link href="/">Forgot your password?</Link>
                    </div>
                    <button type="submit" className="button p-4">
                        {loading ? "Loading..." : "Log in"}
                    </button>
                </form>
            </div>
        </AuthLayout>
    );
}
