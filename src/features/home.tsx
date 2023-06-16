import { useState } from "react";
import IconForest from "../assets/icons/iconforest";
import Button from "../components/button";
import Container from "../components/container";
import Divider from "../components/divider";
import Input from "../components/input";
import ModalWindow from "../components/modal";
import Sidebar from "../components/sidebar";
import IconSearch from "../assets/icons/iconsearch";
import { ValuesType } from "./types";

const Home = () => {
  const [value, setValue] = useState<string>("");

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  return (
    <>
      <Sidebar />
      <Container size="sm">
        <h1>Hello!</h1>
        <ModalWindow title="Modal window" paragraph="Neki tekst">
          <h2>Neki naslov</h2>
          <p>Neki tekst</p>
        </ModalWindow>
        <Divider marginBottom="sm" marginTop="ig" />
        <h1>Neki naslov</h1>
        <p>neki tekst</p>
        <Divider marginBottom="sm" marginTop="ig" />
        <Input
          disabled={true}
          value={inputsValue.firstName}
          icon={<IconForest />}
          placeholder="First name"
          onChange={(value: string) => handleInputsValue(value, "firstName")}
        />
        <Input
          value={inputsValue.lastName}
          icon={<IconSearch />}
          placeholder="Last name"
          onChange={(value: string) => handleInputsValue(value, "lastName")}
        />
        <Input
          value={value}
          onChange={(value) => setValue(value)}
          icon={<IconForest />}
        />
        <Button onClick={() => console.log(inputsValue)} text="Get values" />
        <Divider />
      </Container>
    </>
  );
};

export default Home;
