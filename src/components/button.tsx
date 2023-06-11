import { MouseEventHandler, useState } from "react";

type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
  onClick?: MouseEventHandler;
};

const Button = ({ onClick, text, color = "green" }: ButtonProps) => {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button className={`btn btn--${color}`} onClick={toggleModal}>
        {text}
      </button>
    </>
  );
};

export default Button;
