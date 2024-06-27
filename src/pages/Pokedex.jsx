import React, { useEffect } from "react";
import useImportData from "../hooks/useImportData";
import axios from "axios";

const Pokedex = () => {
  const pokemonURL = "https://wd51-pokeserver.onrender.com/api/v1/pokes/";
  const { data, error, loading } = useImportData(pokemonURL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(pokemonURL);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pokemonURL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/245.gif"
        alt="Pokemon"
        className="mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">POKEDEX</h1>
      <div className="text-lg">
        <h2 className="mb-2">Pokémon List:</h2>
        <ul>
          {data.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;
