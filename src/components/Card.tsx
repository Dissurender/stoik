import { CardContent, Container, Typography } from "@mui/material";
import React from "react";
import MyButton from "./Button";

interface CardProps {
  title: string;
  body?: string | React.ReactNode;
  url?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Container
      sx={{
        height: "fit-content",
        width: "30rem",
        margin: "1rem auto",
        outline: "1px solid black",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "1rem",
        boxShadow: "0 0 5px 0 #000000",
      }}
    >
      <CardContent>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="body1">{props.body}</Typography>

        <Container
          disableGutters
          sx={{
            marginTop: "1rem",
          }}
        >
          <MyButton
            text="Read More"
            url={props.url}
            target="_blank"
            rel="noreferrer noopener"
          />
        </Container>
      </CardContent>
    </Container>
  );
};

export default Card;
