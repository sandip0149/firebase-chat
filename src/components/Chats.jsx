import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Chats = () => {
  return (
    <>
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
          <Typography fontWeight="bold">User Name</Typography>
          <Typography variant="body2" color="text.secondary">
            User message
          </Typography>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};

export default Chats;
