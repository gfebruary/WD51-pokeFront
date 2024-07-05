import React from "react";
import PokemonDisplay from "./PokemonDisplay";

const PokemonSection = ({ playerPokemon, cpuPokemon, imageURL, cpuChoice }) => {
  return (
    <div className="flex justify-around w-full">
      <PokemonDisplay
        pokemon={playerPokemon}
        imageURL={imageURL}
        transformStyle="scaleX(-1)"
      />
      <PokemonDisplay
        pokemon={cpuPokemon}
        imageURL={imageURL}
        cpuChoice={cpuChoice}
      />
    </div>
  );
};

export default PokemonSection;
