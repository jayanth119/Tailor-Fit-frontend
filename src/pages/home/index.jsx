import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Tailor Fit</h1>
            <p className="mt-4 text-lg text-gray-600">Your one-stop solution for custom tailoring</p>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Get Started
            </button>
        </div>
    );
};

export default Home;