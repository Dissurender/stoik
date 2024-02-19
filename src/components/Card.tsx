import { CardContent, Container, Typography } from "@mui/material";
import React from "react";

interface CardProps {
  title: string;
  body?: string | React.ReactNode;
  button?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Container
      sx={{
        height: "fit-content",
        width: "20rem",
        outline: "1px solid black",
        padding: "1rem",
        backgroundColor: "red",
      }}
    >
      <CardContent>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="body1">
          {props.body || "This is the card body."}
        </Typography>

        <Container
          disableGutters
          sx={{
            marginTop: "1rem",
          }}
        >
          {props.button}
        </Container>
      </CardContent>
    </Container>
  );
};

export default Card;
