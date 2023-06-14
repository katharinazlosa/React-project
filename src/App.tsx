import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/styles.scss";
import Button from "./components/button";
import ModalWindow from "./components/modal";
import Divider from "./components/divider";
import Container from "./components/container";
import Input from "./components/input";
import IconSearch from "./assets/icons/iconsearch";
import { useState } from "react";
import IconForest from "./assets/icons/iconforest";

type ValuesType = {
  [key: string]: string;
};

const obj: ValuesType = {
  firstName: "",
  lastName: "",
};

function App() {
  const [inputsValue, setInputsValue] = useState<ValuesType>(obj);
  const [value, setValue] = useState<string>("");

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  return (
    <Container size="sm">
      <h1>Hello!</h1>

      <ModalWindow title="Modal window" paragraph="Neki tekst" />
      <Divider marginBottom="sm" marginTop="ig" />
      <h1>Neki naslov</h1>
      <p>neki tekst</p>
      <Divider marginBottom="sm" marginTop="ig" />
      <Input
        value={inputsValue.firstName}
        icon={<IconForest />}
        placeholder="First name"
        onChange={(value: string) => handleInputsValue(value, "firstName")}
      />
      <Input
        value={inputsValue.lastName}
        icon={<IconForest />}
        placeholder="Last name"
        onChange={(value: string) => handleInputsValue(value, "lastName")}
      />
      <Input value={value} onChange={(value) => setValue(value)} />
      <button onClick={() => console.log(inputsValue)}>Get values</button>
    </Container>
  );
}

export default App;
