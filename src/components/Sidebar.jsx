import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import { RiUserLine } from "react-icons/ri";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon";
import { Input } from "@mui/material";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <>
      <Navbar />
      <Box component="form" sx={{ flexGrow: 1 }}>
        <Input
          sx={{
            minHeight: "7vh",
            pl: 2,
          }}
          defaultValue=""
          fullWidth
          placeholder="Find User"
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon>
                <RiUserLine />
              </SvgIcon>
            </InputAdornment>
          }
        ></Input>
      </Box>
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
