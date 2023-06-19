import { FormEvent, FormEventHandler, useState } from "react";

import { ValuesType } from "./types";
import Container from "../components/container";
import Devider from "../components/devider";
import Field from "../components/field";
import Button from "../components/button";
import Textarea from "../components/textarea";

const initialData: ValuesType = {
  firstName: "",
  lastName: "",
  email: "",
  textarea: "",
};

const Contact = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  return (
    <Container>
      <h1>Contact page</h1>
      <Devider />
      <div>
        <Field
          id="firstName"
          label="First name"
          value={inputsValue.firstName}
          onChange={(value) => handleInputsValue(value, "firstName")}
        />
        <Field
          id="lastName"
          label="Last name"
          value={inputsValue.lastName}
          onChange={(value) => handleInputsValue(value, "lastName")}
        />
        <Field
          id="email"
          label="Email"
          value={inputsValue.email}
          onChange={(value) => handleInputsValue(value, "email")}
        />
        <Textarea
          id="Question Box"
          label="Question Box"
          value={inputsValue.textarea}
          onChange={(value) => handleInputsValue(value, "textarea")}
        />
        <Button
          text="Send a message"
          onClick={() => console.log(inputsValue)}
        />
      </div>
    </Container>
  );
};
export default Contact;
