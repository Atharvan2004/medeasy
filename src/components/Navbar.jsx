import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 shadow-slate-600 shadow-md mb-3 rounded-lg" style={{backgroundColor:"#1B1A55"}}>
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center">
            <span className="text-white text-3xl font-bold">MedEasy</span>
          </div>
          <div className='flex'>
          <div className="flex text-lg items-center justify-between px-4">
            <a href="#" className="text-white mx-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Home</a>
            <a href="#" className="text-white mx-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">About</a>
            <a href="#" className="text-white mx-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">Contact</a>
          </div>
          <div className='text-lg'>
            <button className='text-orange-300 p-3 mx-2 px-4 border-2 border-orange-400 rounded-full'>Login</button>
            <button className='text-orange-300 p-3 mx-2 px-4 border-2 border-orange-400 rounded-full'>SignUp</button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
