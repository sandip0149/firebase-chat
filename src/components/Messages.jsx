import React from "react";
import Message from "./Message";
import { Stack } from "@mui/material";

const Messages = () => {
  const now = new Date()
  return (
    <>
      <Stack
        sx={{
          
          height: "100%",
          
        }}
        
      >
        <Message contentType="image" createdAt={now} position="right"/>
        <Message contentType="text" createdAt={now} position="left"/>
        <Message contentType="image" createdAt={now} position="left"/>
        <Message contentType="text" createdAt={now} position="right"/>
        <Message contentType="text" createdAt={now} position="right"/>
        <Message contentType="text" createdAt={now} position="right"/>
        <Message contentType="text" createdAt={now} position="right"/>
        {/* <Message />
        <Message />
        <Message /> */}
      </Stack>
    </>
  );
};

export default Messages;
  //  contentType, createdAt, position