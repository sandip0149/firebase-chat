import React from "react";
import Navbar from "./Navbar";
import Chats from "./Chats";
import Search from "./Search";

const Sidebar = () => {
  return (
    <>
      <Navbar />
      <Search/>
       
      
      <Chats/>
    </>
  );
};

export default Sidebar;
