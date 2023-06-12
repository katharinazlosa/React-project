import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/styles.scss";
import Button from "./components/button";
import ModalWindow from "./components/modal";
import Divider from "./components/divider";
import Container from "./components/container";
import Input from "./components/input";
import IconSearch from "./assets/icons/iconsearch";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <Container size="sm">
      <h1>Hello!</h1>
      <Button text="Click me" color="blue" />
      <ModalWindow title="Modal window" paragraph="Neki tekst" />
      <Divider marginBottom="sm" marginTop="ig" />
      <h1>Neki naslov</h1>
      <p>neki tekst</p>
      <Divider marginBottom="sm" marginTop="ig" />
      <Input icon={<IconSearch />} placeholder="Enter text..." size="sm" />
      <Input value={inputValue} />
    </Container>
  );
}

export default App;
