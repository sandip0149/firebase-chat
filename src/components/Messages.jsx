import React from "react";
import Message from "./Message";
import { Stack } from "@mui/material";

const Messages = () => {
  return (
    <>
      <Stack
        sx={{
          
          height: "100%",
        }}
      >
        <Message />
        <Message />
        <Message />
        <Message />
      </Stack>
    </>
  );
};

export default Messages;
