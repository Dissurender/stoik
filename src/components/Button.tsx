import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  text: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  url?: string;
}

const MyButton: React.FC<ButtonProps> = (props) => {
  const handleClick = () => {
    window.open(props.url, "_blank");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      {props.text || "Button"}
    </Button>
  );
};

export default MyButton;
