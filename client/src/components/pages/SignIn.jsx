import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Sign In</h1>
      <form className="flex flex-col items-center justify-center">
        <input className="mb-2 px-4 py-2 border border-gray-400 rounded-md" type="email" placeholder="Email" />
        <input className="mb-2 px-4 py-2 border border-gray-400 rounded-md" type="password" placeholder="Password" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mb-2">Sign In</button>
      </form>
      <p className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
