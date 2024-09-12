import React, { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';

interface ErrorBoundaryProps {
    children: ReactNode;
}

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <h1>Something went wrong:</h1>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={(error, errorInfo) => {
                console.error("Error caught in ErrorBoundary: ", error, errorInfo);
            }}
        >
            {children}
        </ReactErrorBoundary>
    );
};

export default ErrorBoundary;
