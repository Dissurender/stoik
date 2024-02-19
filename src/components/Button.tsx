import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  text: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
}

const button: React.FC<ButtonProps> = (props) => {
  return (
    <Button variant="contained" color="primary">
      {props.text || "Button"}
    </Button>
  );
};

export default button;
