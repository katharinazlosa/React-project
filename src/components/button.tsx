// import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
  onClick: () => void;
};
// & ButtonHTMLAttributes<HTMLButtonElement>; ovo dodamo gore iza }
//a to smo dobili hoveranjem preko button elementa
// ...props dodamo i dolje, spredamo properties od btn atributa
const Button = ({ onClick, text, color = "green" }: ButtonProps) => {
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
