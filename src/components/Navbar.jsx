import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { signOut } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  const { currUser } = useContext(AuthContext);
  useEffect(()=>{
    console.log(currUser);
  },[currUser])
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      p={3}
      sx={{
        backgroundColor: "lightgray",
      }}
    >
       
      <Stack>
        <Stack
          sx={{
            minHeight: 60,
            minWidth: 60,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage:  
              "url(https://firebasestorage.googleapis.com/v0/b/firechat-584fa.appspot.com/o/dc63ceea-037b-4623-a45d-ad05042ee0f6?alt=media&token=b99b9b11-8718-4828-b804-621854c94a99)",
          }}
        ></Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
      <Stack
          sx={{
            minHeight: 60,
            minWidth: 60,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius:"50%",
            backgroundImage: `url(${currUser.photoURL})`
              
          }}
        ></Stack>
        <Typography>{currUser.displayName || "FireUser"}</Typography>
        <Button variant="contained" onClick={() => signOut(auth)}>
          Log Out
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
