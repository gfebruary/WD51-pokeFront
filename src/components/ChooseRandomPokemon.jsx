import React, { useEffect, useState } from "react";

const ChooseRandomPokemon = ({
  data,
  onPlayerPokemonSelected,
  onCpuPokemonSelected,
}) => {
  const [selectedPlayerPokemon, setSelectedPlayerPokemon] = useState(null);
  const [selectedCpuPokemon, setSelectedCpuPokemon] = useState(null);

  useEffect(() => {
    const getRandomPokemon = () => {
      if (data && Array.isArray(data.pokeBase)) {
        const randomIndex = Math.floor(Math.random() * data.pokeBase.length);
        return data.pokeBase[randomIndex];
      }
      return null;
    };

    if (!selectedPlayerPokemon || !selectedCpuPokemon) {
      const playerPokemon = getRandomPokemon();
      const cpuPokemon = getRandomPokemon();

      setSelectedPlayerPokemon(playerPokemon);
      setSelectedCpuPokemon(cpuPokemon);

      if (playerPokemon) {
        onPlayerPokemonSelected(playerPokemon);
      }

      if (cpuPokemon) {
        onCpuPokemonSelected(cpuPokemon);
      }
    }
  }, [
    data,
    selectedPlayerPokemon,
    selectedCpuPokemon,
    onPlayerPokemonSelected,
    onCpuPokemonSelected,
  ]);

  return null;
};

export default ChooseRandomPokemon;
