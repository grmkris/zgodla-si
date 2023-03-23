import { type AppType } from "next/app";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { api } from "~/utils/api";

import "~/styles/globals.css";

// Create a client
const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
};

export default api.withTRPC(MyApp);
