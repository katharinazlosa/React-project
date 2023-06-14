import { ReactNode } from "react";
import IconSearch from "../assets/icons/iconsearch";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "md" | "sm";
  value?: string;
  onChange: (value: string) => void;
};

const Input = ({ placeholder, icon, size, value, onChange }: InputProps) => {
  return (
    <>
      <div className="input__wrapper">
        <input
          onChange={(e) => onChange(e.target.value)}
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
