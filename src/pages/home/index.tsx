import { Container, Typography } from "@mui/material";

import CardList from "../../components/CardList";
import MyButton from "../../components/Button";

function HomePage() {
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h3">Welcome to the home page!</Typography>
        <Typography variant="body1">
          This is a simple example for my proxy API Medium-Roast. You can find
          the source code for this project on my GitHub.
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
