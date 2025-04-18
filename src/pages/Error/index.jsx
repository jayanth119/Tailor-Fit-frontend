import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <h2 className="text-4xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Go back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;