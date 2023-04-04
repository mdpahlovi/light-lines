import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import AuthLayout from "@/layouts/AuthLayout";
import Link from "next/link";

export default function Signup() {
    const { createUser, setLoading, loading } = useAuth();

    const { handleSubmit, register } = useForm();
    const handleSignup = ({ fast_name, last_name, email, password }) => {
        const user = { name: `${fast_name} ${last_name}`, email, avatar: "", role: "reader", isAdmin: false };
        createUser(email, password)
            .then(({ user }) => {
                router.replace("/");
            })
            .catch(({ message }) => {
                console.error(message);
                setLoading(false);
            });
    };

    return (
        <AuthLayout title="Signup - Light Lines">
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
                    <h3 className="font-bold text-3xl">Sign up</h3>
                    <p className="">
                        Already have an account?
                        <Link href="/login" className="ml-2 font-medium text-indigo-500 hover:text-indigo-600">
                            Log in
                        </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit(handleSignup)} className="w-full mx-auto space-y-4">
                    <div className="flex gap-4">
                        <input type="text" {...register("fast_name")} placeholder="Fast Name" className="input input-dark" />
                        <input type="text" {...register("last_name")} placeholder="Last Name" className="input input-dark" />
                    </div>
                    <input type="email" {...register("email")} placeholder="Email" className="input input-dark" />
                    <input type="password" {...register("password")} placeholder="Password" className="input input-dark" />
                    <input type="password" {...register("cPassword")} placeholder="Confirm Password" className="input input-dark" />
                    <button type="submit" className="button p-4">
                        {loading ? "Loading..." : "Sign up"}
                    </button>
                </form>
            </div>
        </AuthLayout>
    );
}
