import { useEffect, useState } from "react";
import Container from "../components/container";

import AnimalCard from "../components/animalcard";
import Devider from "../components/devider";
import Loader from "../components/loader";
import Pagination from "../components/pagination";

export type AnimalsType = {
  animal: string;
  name: string;
  diet: string;
  habitat: string;
  animalClass: string;
  species: string;
};

//rows per page, koliko itema vidimo na stranici
const rpp = 8;

const noOfItems = 20;

const noOfPages = Math.ceil(20 / 8);
console.log(noOfPages);

const Animals = () => {
  const [animals, setAnimals] = useState<AnimalsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const getAnimals = () => {
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setAnimals(data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimals();
  }, [page]); //okinut će se svaki put kad se promijeni page - dependency

  return (
    <>
      <h1>Animales</h1>
      <Loader isActive={loading} />
      <div className="grid grid--primary">
        {animals.map((animal) => {
          return <AnimalCard animal={animal} key={animal.name} />;
        })}
      </div>
      <Pagination
        onPaginate={(activePage) => console.log("active page", activePage)}
      />
    </>
  );
};

export default Animals;
