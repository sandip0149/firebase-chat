import React, { useContext, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Input } from "@mui/material";
import "./input.css";
import { AiOutlineSend, AiOutlineFileImage } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { GoPaperclip } from "react-icons/go";
import { useRef } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const MessageInput = () => {
  const fileInputRef = useRef(null);

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { data } = useContext(ChatContext);
  const { currUser } = useContext(AuthContext);

  const handleImageLabelClick = () => {
    fileInputRef.current.click();
  };

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          // const progress =
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
          // switch (snapshot.state) {
          //   case "paused":
          //     console.log("Upload is paused");
          //     break;
          //   case "running":
          //     console.log("Upload is running");
          //     break;
          // }
        },
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL);
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),

                senderId: currUser.uid,
                date: new Date(),
                img: downloadURL,
              }),
            });
            if (text) {
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currUser.uid,
                  date: new Date(),
                }),
              });
            }
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currUser.uid,
          date: new Date(),
        }),
      });
      setText("");
    }
  };
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={2}
      >
        <input
          type="text"
          placeholder="Type something..."
          className="message-input"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <Stack direction="row" spacing={4} mr={3} alignItems="center">
          <GoPaperclip
            size={"3.5vh"}
            color="rgba(108, 115, 127, 1)"
            cursor="pointer"
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setImg(e.target.files[0])}
          />

          {/* Image label */}
          <label onClick={handleImageLabelClick}>
            <RiImageAddFill
              size={"3.5vh"}
              color="rgba(108, 115, 127, 1)"
              cursor="pointer"
            />
          </label>
          <Button
            variant="contained"
            sx={{
              px: 4,
            }}
            onClick={handleSend}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default MessageInput;
