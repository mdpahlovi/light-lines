import { UserContext } from "@/hooks/useAuth";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <UserContext>
                <Component {...pageProps} />
            </UserContext>
        </QueryClientProvider>
    );
}
