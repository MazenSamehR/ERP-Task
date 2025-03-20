import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutGrid, HelpCircle, LogOut } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const NavItem = ({ icon, text, path }) => {
    const isActive = location.pathname === path;
    
    return (
      <div
        onClick={() => navigate(path)}
        className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${
          isActive ? "bg-white text-[#FF6B6B] font-semibold" : "hover:bg-white/20 text-white"
        }`}
      >
        {icon}
        <span>{text}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-64 bg-[#FF6B6B] text-white min-h-screen p-4 rounded-r-4xl relative">
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <div>
            <h2 className="font-semibold">Mazen Sameh</h2>
            <p className="text-sm text-white/80">mazen@gmail.com</p>
          </div>
        </div>

        <nav className="space-y-4 cursor-pointer">
          <NavItem icon={<LayoutGrid size={20} />} text="Dashboard" path="/" />
          <NavItem icon={<HelpCircle size={20} />} text="Help" path="/help" />
        </nav>

        <div className="absolute bottom-8 left-4">
          <button className="flex items-center cursor-pointer gap-3 text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
