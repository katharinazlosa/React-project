import { ReactNode } from "react";
import IconSearch from "../assets/icons/iconsearch";

type InputProps = {
  placeholder?: string;
  icon: ReactNode;
  size?: "md" | "sm";
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  name?: string;
};

const Input = ({
  disabled = false,
  placeholder = "",
  icon,
  size = "sm",
  value = "Click",
  onChange,
  name,
}: InputProps) => {
  return (
    <>
      <div className="input__wrapper">
        <input
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className={`input ${icon && "input--hasIcon"} input--${size}`}
          type="text"
          placeholder={placeholder}
          id={name}
        ></input>
        <div className="input__img">{icon}</div>
      </div>
    </>
  );
};

export default Input;
