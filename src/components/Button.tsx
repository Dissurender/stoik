import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  text: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
  url?: string;
  sx?: React.CSSProperties;
}

const MyButton: React.FC<ButtonProps> = (props) => {
  const handleClick = () => {
    window.open(props.url, "_blank noreferrer noopener");
  };

  return (
    <Button
      sx={props.sx}
      size={props.size || "medium"}
      variant={props.variant || "contained"}
      color={props.color || "primary"}
      onClick={handleClick}
    >
      {props.text || "Button"}
    </Button>
  );
};

export default MyButton;
