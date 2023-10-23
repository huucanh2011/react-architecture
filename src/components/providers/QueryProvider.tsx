import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const QueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 1000 * 60 * 5,
          staleTime: 1000 * 30,
          refetchOnMount: false,
          refetchOnReconnect: true,
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
