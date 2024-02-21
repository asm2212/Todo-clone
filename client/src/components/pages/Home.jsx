import React from 'react';
import logo from '../../assets/logo.png';
import todo from '../../assets/todo.jpg';
import micro from '../../assets/microsoft.png';

const HomePage = () => {
  return (
    <div className="flex flex-col  h-screen">
        <img className="w-16 h-16 mb-4" src={logo} alt="Microsoft To-Do Logo" />
      <div className='flex flex-col items-center justify-center'>
      <h1 className="text-3xl font-semibold mb-4">Welcome to Microsoft To-Do</h1>
      <img className="w-48 h-auto mb-4" src={todo} alt="" />
      <div className="flex flex-col items-center justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-12 rounded-none mb-2">Sign In</button>
        <p className="text-sm mb-4">Sign in with school, work, or Microsoft account</p> 
        <div className="flex items-center mb-4">
          <img className="w-6 h-6 mr-2" src={micro} alt="Microsoft Logo" /> 
          <span className="font-semibold">Microsoft</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
