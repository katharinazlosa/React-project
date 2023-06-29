import { useState } from "react";
import Container from "../components/container";
import Devider from "../components/devider";
import Field from "../components/field";
import { AnimalType } from "../features/animals";
import { ValuesType } from "../features/types";
import Button from "../components/button";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const initialData: AnimalType = {
  name: "",
  species: "",
  animalClass: "",
  diet: "",
  habitat: "",
};

const AnimalCreate = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };
  const onSubmit = (inputsValue: ValuesType) => {
    let getOut = false;
    let errorInputs = "";

    const keys = Object.keys(inputsValue);

    // for(let i=0; i < keys.length, i++) {
    //   if(inputsValue[keys[i]] === "") {
    //     getOut= true;
    //     break;
    //   }
    // }

    //kreira array objekt keyeva
    Object.keys(inputsValue).forEach((key) => {
      if (inputsValue[key] === "") {
        getOut = true;
        errorInputs = errorInputs + key + ", ";
      }
    });
    if (getOut) {
      setError(
        "Moraju svi inputi biti popunjeni kako bi se životinja kreirala. Inputi koji se trebaju popuniti su" +
          errorInputs
      );
      return;
    } else {
      setError("");
    }
    const obj = inputsValue;
    obj.id = "test";

    fetch("http://localhost:3000/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/animals");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Create a new animal</h1>
      <Devider />
      {error && <div className="message message--error">{error}</div>}
      <div>
        <Field
          id="name"
          value={inputsValue.name}
          label="Name of an animal"
          onChange={(newValue) => handleInputsValue(newValue, "name")}
        />
        <Field
          id="species"
          value={inputsValue.species}
          label="Animal species"
          onChange={(newValue) => handleInputsValue(newValue, "species")}
        />
        <Field
          id="animalClass"
          value={inputsValue.animalClass}
          label="Animal class"
          onChange={(newValue) => handleInputsValue(newValue, "animalClass")}
        />
        <Field
          id="diet"
          value={inputsValue.diet}
          label="What this animal eats"
          onChange={(newValue) => handleInputsValue(newValue, "diet")}
        />
        <Field
          id="habitat"
          value={inputsValue.habitat}
          label="What this animal lives"
          onChange={(newValue) => handleInputsValue(newValue, "habitat")}
        />
      </div>
      <Button text="Dodaj životinju" onClick={() => onSubmit(inputsValue)} />
    </Container>
  );
};

export default AnimalCreate;
