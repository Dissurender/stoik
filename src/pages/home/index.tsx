import { Typography } from "@mui/material";

import CardList from "../../components/CardList";

function HomePage() {
  return (
    <>
      <Typography variant="h2">Home Page</Typography>
      <Typography variant="body1">Welcome to the home page!</Typography>
      <CardList />
    </>
  );
}

export default HomePage;
