import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Assuming Sidebar is in the same directory
import { MenuOutlined } from "@ant-design/icons";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //
  // <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

  return (
    <div className="flex px-0 h-full">
      <Sidebar isOpen={isSidebarOpen} />
      <main className="w-full">
        <div className=" py-5 shadow px-4">
          <MenuOutlined
            onClick={toggleSidebar}
            className="text-xl  focus:outline-none"
          />
          header
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
