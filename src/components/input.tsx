import { ReactNode } from "react";
import IconSearch from "../assets/icons/iconsearch";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "md" | "sm";
  value: string;
};

const Input = ({ placeholder, icon, size, value }: InputProps) => {
  return (
    <>
      <div className="input__wrapper">
        <input
          value={value}
          className={`input ${icon && "input--hasIcon"} input--${size}`}
          type="text"
          placeholder={placeholder}
        ></input>
        <div className="input__img">{icon}</div>
      </div>
    </>
  );
};

export default Input;
