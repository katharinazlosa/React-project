// import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue" | "purple" | "white";
  onClick?: (value: string) => void;
  disabled?: boolean;
  onFinish?: (value: string) => void;
};
// & ButtonHTMLAttributes<HTMLButtonElement>; ovo dodamo gore iza }
//a to smo dobili hoveranjem preko button elementa
// ...props dodamo i dolje, spredamo properties od btn atributa
const Button = ({ onClick, text, color = "green", disabled }: ButtonProps) => {
  return (
    <>
      <button
        className={`btn btn--${color}`}
        onClick={(e) => onClick()}
        // {...props}
      >
        {text}
      </button>
    </>
  );
};

export default Button;

//koristiti ButtonHTMLAttributes kod više evenata
