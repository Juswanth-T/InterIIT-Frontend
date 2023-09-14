'use client'
import React, { useState } from 'react';
import Sidebar from './Sidebar';
export default function Header() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  }

  return (
    <div>
    <div className="bg-blue-300 py-2 flex items-center justify-center justify-between fixed top-0 left-0 right-0 ">
       <div className = "ml-4  w-[40px]  ">
       <img src = "https://images.unsplash.com/photo-1693834048060-fd24bfa399ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80" alt = "Logo" />
       </div>
      <div className='font-bold text-2xl'>IIT NAME</div>
      <div className="mr-4">
        
        {/* Pending payment button */}
        <button
          className="bg-black text-white py-2 px-2 rounded-md"
          onClick={toggleSidebar}
        >
          Pending Payment
        </button>
      </div>
    </div>
    <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>

  );
};
