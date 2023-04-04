import axios from "axios";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import AuthLayout from "@/layouts/AuthLayout";

export default function Signup() {
    const { createUser, setLoading, setUser, loading } = useAuth();

    const { handleSubmit, register } = useForm();
    const handleSignup = ({ fast_name, last_name, email, password }) => {
        const user = { name: `${fast_name} ${last_name}`, email, avatar: "", role: "reader", isAdmin: false };

        createUser(email, password)
            .then((auth) => {
                if (auth.user.uid) {
                    axios
                        .post("/api/user", user)
                        .then((res) => setUser(res.data))
                        .catch(({ message }) => {
                            console.error(message);
                            setLoading(false);
                        });
                }
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
            <div className="absolute lg:static w-full h-full flex flex-col justify-center space-y-6 z-10 py-16 sm:px-16">
                <Image src="/logo.png" alt="" className="pb-2 mx-auto" width={255} height={40} />
                <form onSubmit={handleSubmit(handleSignup)} className="w-full px-6 mx-auto space-y-4">
                    <div className="flex gap-4">
                        <input type="text" {...register("fast_name")} placeholder="Fast Name" className="input px-6 py-4 bg-black" />
                        <input type="text" {...register("last_name")} placeholder="Last Name" className="input px-6 py-4 bg-black" />
                    </div>
                    <input type="email" {...register("email")} placeholder="Email" className="input px-6 py-4 bg-black" />
                    <input type="password" {...register("password")} placeholder="Password" className="input px-6 py-4 bg-black" />
                    <input type="password" {...register("cPassword")} placeholder="Confirm Password" className="input px-6 py-4 bg-black" />
                    <button type="submit" className="uppercase block w-full p-4 rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                        {loading ? "Loading..." : "Sign up"}
                    </button>
                </form>
            </div>
        </AuthLayout>
    );
}
