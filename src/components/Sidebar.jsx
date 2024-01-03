import React from "react";
import Navbar from "./Navbar";
import Chats from "./Chats";
import Search from "./Search";

const Sidebar = () => {
  return (
    <>
      <Navbar />
      <Search/>
      {
        [1,2,3,4].map((i)=>{
          return(
            <Chats key={i}/>
          )
         
        })
      }
      
      <Chats/>
    </>
  );
};

export default Sidebar;
