import { Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import React from "react";
import MyButton from "./Button";

interface CardProps {
  title: string;
  body?: string | React.ReactNode;
  url?: string;
}

const MyCard: React.FC<CardProps> = (props) => {
  return (
    <Card
      sx={{
        minHeight: "12rem",
        width: "60%",
        minWidth: "400px",
        margin: "1rem auto",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardHeader title={props.title} />

      <CardContent>
        <Typography variant="body1">{props.body}</Typography>

        <Divider sx={{ margin: "1rem 0" }} />
        <MyButton
          sx={{
            marginTop: "1rem",
          }}
          text="Read More"
          url={props.url}
        />
      </CardContent>
    </Card>
  );
};

export default MyCard;
