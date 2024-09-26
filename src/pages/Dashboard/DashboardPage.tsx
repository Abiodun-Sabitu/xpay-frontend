import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Assuming Sidebar is in the same directory
// import { MenuOutlined } from "@ant-design/icons";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar state
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <>
      <div className="bg-[#F2F6FC] h-full">
        <div
          className="ps-2 pr-4 md:px-4 py-[1.35rem] mx-0 text-2xl bg-white text-blue-800 font-medium shadow-lg"
          style={{ fontFamily: "Kanit" }}
        >
          <span className="font-extrabold text-red-700">X</span>
          <span
            className="font-bold text-center text-2xl text-blue-800"
            style={{ fontFamily: "Kanit" }}
          >
            Pay
          </span>
          {/* <MenuOutlined
          onClick={toggleSidebar}
          className="text-xl focus:outline-none text-blue-800 pt-3"
        /> */}
        </div>
        <div className="flex px-0">
          <Sidebar isOpen={isSidebarOpen} />
          <main className=" bg-white rounded-md h-screen m-5 w-full"></main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
