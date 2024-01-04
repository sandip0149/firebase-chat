import React, { useContext } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../context/AuthContext";

const Message = ({ contentType, date , senderId , text , img}) => {
   
  const dates = new Date(date.seconds * 1000 + date.nanoseconds / 1e6);
  const ago = formatDistanceToNowStrict(dates);
  const {currUser} = useContext(AuthContext)
  const position = senderId == currUser.uid ? "right" : "left"
  return (

    <>
      <Box
        sx={{
          display: "flex",
          alignItems: position === "right" ? "flex-end" : "flex-start",
        }}
        px={2}
      >
        <Stack
          alignItems="flex-start"
          direction={position === "right" ? "row-reverse" : "row"}
          spacing={2}
          sx={{
            maxWidth: 500,
            ml: position === "right" ? "auto" : 0,
            mr: position === "left" ? "auto" : 0,
          }}
        >
          <Avatar
            src="https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg"
            sx={{
              height: 32,
              width: 32,
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Card
              sx={{
                backgroundColor:
                  position === "right" ? "primary.main" : "background.paper",
                color:
                  position === "right"
                    ? "primary.contrastText"
                    : "text.primary",
                px: 2,
                py: 1,
              }}
            >
              {/* <Box sx={{ mb: 1 }}>
                <Link
                  color="inherit"
                  sx={{ cursor: "pointer" }}
                  variant="subtitle2"
                >
                  User
                </Link>
              </Box> */}
              {contentType === "image" && (
                <CardMedia
                  onClick={() => {}}
                  image="https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg"
                  sx={{
                    height: 200,
                    width: 200,
                  }}
                />
              )}
              {contentType === "text" && (
                <Typography color="inherit" variant="body1" width="max-content">
                  {text}
                </Typography>
              )}
            </Card>
            <Box
              sx={{
                display: "flex",
                justifyContent:
                  position === "right" ? "flex-end" : "flex-start",
                mt: 1,
                px: 2,
              }}
            >
              <Typography color="text.secondary" noWrap variant="caption">
                {ago} ago
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Message;
