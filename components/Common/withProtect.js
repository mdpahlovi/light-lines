import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { CirclesWithBar } from "react-loader-spinner";

export function withProtect(Component) {
    return function Protect(props) {
        const [screenLoading, setScreenLoading] = useState(true);
        const { authUser, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!loading) {
                if (!authUser?.uid) {
                    router.replace("/login");
                } else {
                    setScreenLoading(false);
                }
            }
        }, [authUser?.uid, loading, router]);

        if (screenLoading) {
            return (
                <div className="w-screen h-screen flex justify-center items-center">
                    <CirclesWithBar height="160" width="160" color="#362c75" />
                </div>
            );
        } else {
            return <Component {...props} />;
        }
    };
}
