import React, { useState } from "react";
import {
  HomeOutlined,
  BarChartOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom"; // You can also use Next.js' Link if applicable

// Sidebar component
const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [activeLink, setActiveLink] = useState<string>("");

  // Array of link details (can be modified to add more links easily)
  const links = [
    { to: "/home", label: "Home", icon: <HomeOutlined /> },
    { to: "/analytics", label: "Analytics", icon: <BarChartOutlined /> },
    { to: "/users", label: "Users", icon: <UserOutlined /> },
    { to: "/settings", label: "Settings", icon: <SettingOutlined /> },
  ];

  // Handle active state for links
  const handleActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    // Sidebar container with dynamic width based on isOpen prop
    <div
      style={{
        backgroundColor: "#1e40af", // Custom background color
      }}
      className={`h-screen text-white md:relative transition-all duration-300 ease-in-out 
      ${isOpen ? "w-64" : "w-20"} md:w-64`}
    >
      {/* Sidebar Header */}
      <div
        className="ps-2 pr-4 md:px-4 py-4 text-2xl bg-white text-blue-800 font-bold"
        style={{ fontFamily: "Kanit" }} // Custom font
      >
        {/* Logo */}
        <span className="font-extrabold text-red-700">X</span>Pay
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 px-2 mt-7">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center p-2 space-x-4 rounded-md hover:bg-slate-100 hover:bg-opacity-2 hover:text-red-700 hover:font-bold hover:ease-in-out
            ${
              activeLink === link.to
                ? "font-bold bg-slate-100 bg-opacity-2 text-red-700"
                : ""
            }`}
            onClick={() => handleActiveLink(link.to)}
          >
            {/* Icon */}
            <span className="text-2xl">{link.icon}</span>
            {/* Label with dynamic visibility */}
            <span
              className={`transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
              }`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
