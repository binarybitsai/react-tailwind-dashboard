import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineAppstore, AiOutlineBarChart , AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation(); 

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const menuItems = [
    { section: "OVERVIEW", items: [
      { name: "Dashboard", icon: <AiOutlineAppstore />, path: "/dashboard" },
      { name: "Cars Data", icon: <AiOutlineBarChart  />, path: "/scrapingjobs" },
    ]}
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg md:hidden"
      >
        <AiOutlineMenu className="text-xl" />
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed md:relative h-screen bg-white shadow-lg transition-all duration-300 z-50
        ${isExpanded ? 'md:w-3/12' : 'md:w-1/12'}
        ${isMobileOpen ? 'translate-x-0 w-8/12' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Desktop Toggle Button */}
        <button 
          onClick={toggleSidebar}
          className="absolute -right-3 top-20 bg-white rounded-full p-1.5 shadow-md hidden md:block"
        >
          {isExpanded ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
        </button>

        {/* Mobile Close Button */}
        <button 
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-600 md:hidden"
          aria-label="Close sidebar"
        >
          <AiOutlineClose className="text-xl" />
        </button>

        {/* Main Sidebar Content */}
        <div className="p-4 pt-14 md:pt-4"> {/* Added padding-top for mobile to account for close button */}
          {/* Logo */}
          <div className={`mb-8 ${isExpanded ? 'px-4' : 'px-2'}`}>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-20 h-16 object-contain" />
            </Link>
          </div>

          {/* Menu Sections */}
          <div className="space-y-8">
            {menuItems.map((section, index) => (
              <div key={index}>
                {/* Section Header */}
                <div className={`text-gray-400 text-xs font-semibold mb-4 ${!isExpanded && 'hidden md:block'}`}>
                  {section.section}
                </div>

                {/* Section Items */}
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        to={item.path}
                        className={`flex items-center text-gray-600 rounded-lg transition-colors
                          ${isExpanded ? 'px-4 py-3' : 'px-2 py-3 justify-center'} 
                          ${location.pathname === item.path ? 'bg-indigo-100' : 'hover:bg-indigo-100'} group relative`}
                      >
                        <span className="text-xl">{item.icon}</span>
                        {(isExpanded || isMobileOpen) && (
                          <span className="ml-3 text-sm font-medium flex-grow">{item.name}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
