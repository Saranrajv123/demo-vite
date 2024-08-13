import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthProvider.jsx';

import ErrorBoundary from './ErrorBoundary.jsx';
import App from './App.jsx';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                {/*<AuthProvider>*/}
                    <QueryClientProvider client={queryClient}>
                        <Suspense>
                            <App />
                        </Suspense>
                    </QueryClientProvider>
                {/*</AuthProvider>*/}
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>,
);
