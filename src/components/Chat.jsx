import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";


const Chat = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={4}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
        <Stack
          borderRadius="50%"
          sx={{
            minHeight: 60,
            minWidth: 60,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage:
            
            
            "url(https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg)",
          }}
        ></Stack>
          <Typography variant="h6">User Name</Typography>
        </Stack>
        <Stack direction="row" spacing={4}>
          <FaVideo
            size={"3vh"}
            color="rgba(108, 115, 127, 1)"
            cursor="pointer"
          />
          <IoCall
            size={"3vh"}
            color="rgba(108, 115, 127, 1)"
            cursor="pointer"
          />
          <BsThreeDots
            size={"3vh"}
            color="rgba(108, 115, 127, 1)"
            cursor="pointer"
          />
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};

export default Chat;
