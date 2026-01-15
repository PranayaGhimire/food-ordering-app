import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'
import Toast from 'react-native-toast-message';

export const queryClient = new QueryClient({
    defaultOptions:{
        queries: {
            staleTime: 60*1000,
            retry:2,
        }
    }
});
const QueryProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
         <Toast/>
    </QueryClientProvider>
  )
}

export default QueryProvider
