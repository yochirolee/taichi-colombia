import "@/styles/globals.css";
import { QueryClient, QueryClientProvider, ReactQueryDevtools } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}
