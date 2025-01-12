"use client"
import { Home, Box, Phone, Info, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function SideNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <aside className={`fixed h-screen bg-black text-white flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <button 
          className="p-4 text-2xl font-bold flex items-center justify-between hover:text-yellow-500"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="w-6 h-6" />
          {isSidebarOpen && <span>Engine Oil</span>}
        </button>
        <nav className="flex flex-col p-4 space-y-6 flex-grow justify-center">
          <Link href="#" className="flex items-center space-x-2 hover:text-yellow-500">
            <Home className="w-8 h-8" />
            {isSidebarOpen && <span>Home</span>}
          </Link>
          <Link href="#" className="flex items-center space-x-2 hover:text-yellow-500">
            <Box className="w-8 h-8" />
            {isSidebarOpen && <span>Product</span>}
          </Link>
          <Link href="#" className="flex items-center space-x-2 hover:text-yellow-500">
            <Phone className="w-8 h-8" />
            {isSidebarOpen && <span>Contact</span>}
          </Link>
          <Link href="#" className="flex items-center space-x-2 hover:text-yellow-500">
            <Info className="w-8 h-8" />
            {isSidebarOpen && <span>About</span>}
          </Link>
        </nav>
      </aside>
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Content will be placed here */}
      </div>
    </>
  );
}
