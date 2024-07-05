import React, { useEffect } from "react";
import axios from "axios";

const UpdateFightInfo = ({
  user,
  score,
  battleOutcome,
  playerPokemon,
  cpuPokemon,
}) => {
  useEffect(() => {
    const updateFightInfo = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found in localStorage");
        return;
      }

      const url = `https://wd51-pokeserver.onrender.com/api/v1/battles/`;
      const dataToSend = {
        fighterID: user.id,
        result: battleOutcome,
        fighterPokemonId: playerPokemon.id,
        computerPokemonId: cpuPokemon.id,
        score,
      };

      try {
        const response = await axios.post(url, dataToSend, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Fight data updated successfully:", response.data);
      } catch (error) {
        console.error("Error updating fight data:", error);
      }
    };

    updateFightInfo();
  }, [user.id, score, battleOutcome, playerPokemon.id, cpuPokemon.id]);

  return null;
};

export default UpdateFightInfo;
