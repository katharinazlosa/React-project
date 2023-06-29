import { AnimalType } from "../features/animals";
import imgDiet from "./../assets/images/diet.png";
import imgAnimalClass from "./../assets/images/animalClass.png";
import imgHabitat from "./../assets/images/habitat.png";
import Button from "./button";

type AnimalCardProps = {
  animal: AnimalType;
  onDelete: (id: string) => void;
};

const AnimalCard = ({ animal, onDelete }: AnimalCardProps) => {
  const { name, animalClass, diet, habitat, species, id } = animal;

  return (
    <>
      <div className="card">
        <div className="card__header">
          <img
            className="card__header__img"
            src={`https://source.unsplash.com/random/200x200/?${animal.name.replace(
              " ",
              "-"
            )}`}
          />
          <div>
            <h1 className="card__title">{name}</h1>
            <div className="card__subtitle">{species}</div>
          </div>
        </div>
        <div className="card__row">
          <img src={imgAnimalClass}></img>
          <span>{animalClass}</span>
        </div>
        <div className="card__row">
          <img src={imgDiet}></img>
          <span>{diet}</span>
        </div>
        <div className="card__row">
          <img src={imgHabitat}></img>
          <span>{habitat}</span>
        </div>
        <Button text="Delete" color="red" onClick={() => onDelete(id)} />
      </div>
    </>
  );
};

export default AnimalCard;
