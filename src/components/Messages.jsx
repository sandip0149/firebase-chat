import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { Stack } from "@mui/material";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Messages = () => {
  const now = new Date();
  const [message, setMessage] = useState([]);
  const { data } = useContext(ChatContext);
  const {currUser} = useContext(AuthContext)
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() &&  setMessage(doc.data().messages)
      
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);
  return (
    <>
      <Stack
        sx={{
          height: "100%",
        }}
        
      >
        {
          message.map((msg,i) => {
           
            return(
              <>
              
               <Message   createdAt={now} position="right" key={i} {...msg} />
              </>
             
            );
          })
        }
        {/* <Message contentType="image" createdAt={now} position="right" />
        <Message contentType="text" createdAt={now} position="left" />
        <Message contentType="image" createdAt={now} position="left" />
        <Message contentType="text" createdAt={now} position="right" />
        <Message contentType="text" createdAt={now} position="right" />
        <Message contentType="text" createdAt={now} position="right" />
        <Message contentType="text" createdAt={now} position="right" /> */}
      </Stack>
    </>
  );
};

export default Messages;
//  contentType, createdAt, position
