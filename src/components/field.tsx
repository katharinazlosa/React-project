import { useState } from "react";
import IconForest from "../assets/icons/iconforest";
import { ValuesType } from "../features/types";
import Input from "./input";

const initialData: ValuesType = {
  firstName: "",
  lastName: "",
  age: "",
};

const Field = ({ text }: ValuesType) => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  return (
    <>
      <div className="field">
        <label htmlFor="First name">{text}</label>
        <Input
          icon={<IconForest />}
          onChange={(value) => handleInputsValue(value, "firstName")}
          value={inputsValue.firstName}
        />
      </div>
    </>
  );
};

export default Field;
