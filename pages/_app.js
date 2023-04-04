import { UserContext } from "@/hooks/useAuth";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <UserContext>
            <Component {...pageProps} />
        </UserContext>
    );
}
