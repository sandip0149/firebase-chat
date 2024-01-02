import { Card, Divider, Grid, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
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
