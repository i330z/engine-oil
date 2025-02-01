"use client"
import { Home, Box, Phone, Info, Menu, Settings } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SideNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile ? ( 
        <div className="mobile-nav bg-transparent z-10 flex items-center justify-between fixed top-0 left-0 right-0 px-5 text-white w-full">
          <div className="logo">Centrol</div>
          <button 
            className="p-6 pr-0 text-2xl font-bold flex items-center hover:text-yellow-500 hamburger-menu"
            onClick={toggleNav}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <aside className={`fixed h-screen bg-black text-white flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
          <button 
            className="p-6 text-2xl font-bold flex items-center hover:text-yellow-500"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-6 h-6" />
            {isSidebarOpen && <span className='pl-5'>Centrol</span>}
          </button>
          <nav className="flex flex-col p-6 space-y-6 flex-grow justify-center">
            <Link href="/" className="flex items-center space-x-2 hover:text-yellow-500">
              <Home className="w-8 h-8 mr-3" />
              {isSidebarOpen && <span>Home</span>}
            </Link>
            <Link href="/" className="flex items-center space-x-2 hover:text-yellow-500">
              <Box className="w-8 h-8 mr-3" />
              {isSidebarOpen && <span>Products</span>}
            </Link>
            <Link href="#" className="flex items-center space-x-2 hover:text-yellow-500">
              <Settings className="w-8 h-8 mr-3" /> {/* Changed icon to Settings */}
              {isSidebarOpen && <span>Services</span>}
            </Link>
            <Link href="#" className="flex items-center space-x-2 hover:text-yellow-500">
              <Phone className="w-8 h-8 mr-3" />
              {isSidebarOpen && <span>Contact</span>}
            </Link>
            <Link href="#" className="flex items-center space-x-2 hover:text-yellow-500">
              <Info className="w-8 h-8 mr-3" />
              {isSidebarOpen && <span>About</span>}
            </Link>
          </nav>
        </aside>
      )}
      {isOpen && isMobile && (
        <div className="nav-items inset-0 absolute bg-black text-white flex flex-col z-20 text-center">
          <nav className="flex flex-col space-y-6 flex-grow justify-center px-32">
            <Link href="/" className="flex items-center space-x-2 hover:text-yellow-500" onClick={toggleNav}>
              <Home className="w-8 h-8 mr-3" />
              <span>Home</span>
            </Link>
            <Link href="/products" className="flex items-center space-x-2 hover:text-yellow-500" onClick={toggleNav}>
              <Box className="w-8 h-8 mr-3" />
              <span>Products</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 hover:text-yellow-500" onClick={toggleNav}>
              <Settings className="w-8 h-8 mr-3" /> {/* Changed icon to Settings */}
              <span>Services</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 hover:text-yellow-500" onClick={toggleNav}>
              <Phone className="w-8 h-8 mr-3" />
              <span>Contact</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 hover:text-yellow-500" onClick={toggleNav}>
              <Info className="w-8 h-8 mr-3" />
              <span>About</span>
            </Link>
          </nav>
        </div>
      )}
      <div className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        
      </div>
    </>
  );
}