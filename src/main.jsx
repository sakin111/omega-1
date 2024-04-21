import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Router/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Component/Shared/AuthProvider/AuthProvider';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
 </QueryClientProvider>
</React.StrictMode>,
)
