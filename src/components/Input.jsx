import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { Input } from "@mui/material";
import "./input.css";
import { AiOutlineSend, AiOutlineFileImage } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { GoPaperclip } from "react-icons/go";
import { useRef } from "react";
const MessageInput = () => {
  const fileInputRef = useRef(null);

  const handleImageLabelClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mt={2}>
        <input
          type="text"
          placeholder="Type something..."
          className="message-input"
        />
        <Stack direction="row" spacing={4} mr={3} alignItems="center">
          <GoPaperclip
            size={"3.5vh"}
            color="rgba(108, 115, 127, 1)"
            cursor="pointer"
          />
          <input type="file" ref={fileInputRef} style={{ display: "none" }} />

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
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default MessageInput;
