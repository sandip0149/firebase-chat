import { Card, Grid, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <Card sx={{
      height:"100vh"
    }}>
      <Grid container  >
        <Grid md={4}>
          <Sidebar />
        </Grid>
        <Grid xs={12} md={8}>
          <Chat />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Home;
