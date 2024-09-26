import React, { useState, useEffect } from "react";
import {
  DashboardOutlined,
  TransactionOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom"; // Use useLocation to get the current route

// Sidebar component
const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState<string>("");

  // Array of link details (without Logout)
  const links = [
    { to: "/dashboard", label: "Dashboard", icon: <DashboardOutlined /> },
    {
      to: "/transactions",
      label: "Transactions",
      icon: <TransactionOutlined />,
    },
    { to: "/profile", label: "Profile", icon: <UserOutlined /> },
    { to: "/settings", label: "Settings", icon: <SettingOutlined /> },
  ];

  // Set the active link based on the current route
  useEffect(() => {
    setActiveLink(location.pathname); // Update active link based on current path
  }, [location.pathname]); // Run whenever the route changes

  return (
    // Sidebar container with dynamic width based on isOpen prop
    <div
      style={{
        backgroundColor: "#1e40af",
      }}
      className={`text-white md:relative transition-all duration-300 ease-in-out 
      ${
        isOpen ? "w-64" : "w-20"
      } md:w-64 flex flex-col gap-32 overflow-y-scroll overflow-x-hidden md:overflow-y-auto`}
    >
      {/* Top Links */}
      <nav className="flex flex-col space-y-5 px-2 mt-12  ">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center p-[0.46rem] space-x-4 rounded-md hover:bg-slate-100 hover:bg-opacity-[0.2] hover:font-bold hover:ease-in-out
            ${
              activeLink === link.to
                ? "font-bold bg-slate-100 bg-opacity-[0.2]"
                : ""
            }`}
          >
            {/* Icon */}
            <span className="text-2xl text-center px-1">{link.icon}</span>
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

      {/* Logout Link (placed at the bottom) */}
      <div className="px-2 mb-4">
        <Link
          to="/logout"
          className={`flex items-center p-[0.46rem] space-x-4 rounded-md hover:bg-slate-100 hover:bg-opacity-[0.2] hover:font-bold hover:ease-in-out
          ${
            activeLink === "/logout"
              ? "font-bold bg-slate-100 bg-opacity-2"
              : ""
          }`}
        >
          {/* Logout Icon */}
          <span className="text-2xl text-center px-1">
            <LogoutOutlined />
          </span>
          {/* Label with dynamic visibility */}
          <span
            className={`transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}
          >
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
