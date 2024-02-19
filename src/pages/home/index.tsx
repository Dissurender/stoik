import React from "react";
import { Button, Typography } from "@mui/material";
import Card from "../../components/Card";

const cardBody = (
  <>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.
    </Typography>
  </>
);

const cardButton = (
  <Button
    variant="contained"
    color="primary"
    size="small"
    onClick={() => console.log("Button clicked!")}
  >
    Click me
  </Button>
);

function HomePage() {
  return (
    <>
      <Typography variant="h2">Home Page</Typography>
      <Typography variant="body1">Welcome to the home page!</Typography>
      <Card title="test title" body={cardBody} button={cardButton} />
    </>
  );
}

export default HomePage;
