import { useEffect, useState } from "react";
import Container from "../components/container";

type CharacterType = {
  name: string;
  age: string;
  quote: string;
};

const Lotr = () => {
  const [character, setCharacter] = useState<CharacterType[]>([]);

  const getCharacters = () => {
    fetch(`http://localhost:3000/characters`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCharacter(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Container>
        <div>
          <h1>Lord of the rings - quotes</h1>

          {character.map((character) => {
            return (
              <div key={character.age} className="quote-container">
                <p>{character.name}</p>
                <span>{character.age}</span>
                <p>{character.quote}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Lotr;

//nBfJiiDoGGe3yOv28fjnHSZ6gxWNukHDPkock7ks
