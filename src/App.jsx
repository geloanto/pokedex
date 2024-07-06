import PokemonCard from "./components/PokemonCard";
import "./style/CardStyle.css";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  { name: "Mew", imgSrc: undefined },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handlePrevious = () => {
    setPokemonIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setPokemonIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 ? (
        <button onClick={handlePrevious}>Précédent</button>
      ) : (
        <button>Précédent</button>
      )}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleNext}>Suivant</button>
      ) : (
        <button>Suivant</button>
      )}
    </div>
  );
}
export default App;
