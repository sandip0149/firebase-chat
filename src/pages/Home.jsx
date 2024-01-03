import { Card, Divider, Grid, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const {currUser} = useContext(AuthContext)
  console.log(currUser);
  return (
    <Card
      sx={{
        height: "98vh",
      }}
    >
      <Grid container direction="row">
        <Grid md={4}>
          <div
            style={{
              borderRight: "1px solid #ccc",
              height: "100vh",
            }}
          >
            <Sidebar />
          </div>
        </Grid>

        <Grid xs={12} md={8}>
          <Chat />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Home;
