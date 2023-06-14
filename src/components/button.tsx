import { useState } from "react";

type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
  onClick: () => void;
};

const Button = ({ onClick, text, color = "green" }: ButtonProps) => {
  return (
    <>
      <button className={`btn btn--${color}`} onClick={(e) => onClick()}>
        {text}
      </button>
    </>
  );
};

export default Button;
