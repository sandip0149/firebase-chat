import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currUser.uid && getChats();
  }, [currUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload:u});
  };

  return (
    <>
      {chats && Object.entries(chats)?.map((chat) => {
        return (
          <>
            <div key={chat[0]} onClick={()=>{handleSelect(chat[1].userInfo)}}>
              <Stack
                direction="row"
                p={3}
                spacing={3}
                alignItems="center"
                sx={{
                  ":hover": {
                    backgroundColor: "rgba(0,0,0,0.2)",
                  },
                  cursor: "pointer",
                }}
              >
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
                <Stack>
                  <Typography fontWeight="bold">
                    {chat[1]?.userInfo.displayName || "fIREuSER"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    User message
                  </Typography>
                </Stack>
              </Stack>
            </div>

            <Divider />
          </>
        );
      })}
      {/* <Stack
        direction="row"
        p={3}
        spacing={3}
        alignItems="center"
        sx={{
          ":hover": {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
          cursor: "pointer",
        }}
      >
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
        <Stack>
          <Typography fontWeight="bold">User Name</Typography>
          <Typography variant="body2" color="text.secondary">
            User message
          </Typography>
        </Stack>
      </Stack>
      <Divider /> */}
    </>
  );
};

export default Chats;
