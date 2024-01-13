import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Messages from "./Messages";

import MessageInput from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const {data} = useContext(ChatContext)
  return (
    <>
      <Stack display="flex" height="100%">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Stack direction="row" alignItems="center" spacing={3}>
            <Stack
              borderRadius="50%"
              sx={{
                minHeight: 60,
                minWidth: 60,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${data.user.photoUrl?  data.user.photoUrl : "https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg"})` }}
            ></Stack>
            <Typography variant="h6">{data.user?.displayName || "FireUser"}</Typography>
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
        <Stack
          height={"75vh"}
          sx={{
            overflowY: "scroll",
          }}
        >
          <Messages />
        </Stack>
        <Divider />

        <Stack justifyContent="flex-end">
          <MessageInput />
        </Stack>
      </Stack>
    </>
  );
};

export default Chat;
