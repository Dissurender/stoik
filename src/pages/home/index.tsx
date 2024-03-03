import { Container, Typography } from "@mui/material";

import CardList from "../../components/CardList";
import MyButton from "../../components/Button";

function HomePage() {
  return (
    <>
      <Container sx={{
        width: "100%",
        margin: "1rem",
        padding: "1rem",
      }}>
        <Typography variant="h3">Welcome to the home page!</Typography>
        <Typography variant="body1">
          This is a simple example for my proxy API Medium-Roast. You can find
          the source code for this project with the button below.
        </Typography>
        <MyButton
          size="large"
          color="secondary"
          text="GitHub"
          url="https://github.com/Dissurender/medium-roast"
        />
      </Container>
      <CardList />
    </>
  );
}

export default HomePage;
