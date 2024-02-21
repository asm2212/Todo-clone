import React from 'react';
import logo from '../../assets/logo.png';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className="w-20 h-20 mb-8" src={logo} alt="Microsoft To-Do Logo" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Microsoft To-Do</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4">Sign In</button>
        <p className="mb-4">Sign in with school, work, or Microsoft account</p>
        <div className="flex items-center mb-4">

          <span className="font-semibold">Microsoft</span>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
