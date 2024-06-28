import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import PokeInfo from "../components/PokeInfo.jsx";

const PlayerInformation = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    await getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (results) => {
    const pokemonArray = await Promise.all(
      results.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );

    pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1));
    setPokeData(pokemonArray);
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          <div className="flex justify-between mt-4">
            {prevUrl && (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="col-span-1">
          <PokeInfo data={pokeDex} />
        </div>
      </div>
    </div>
  );
};

export default PlayerInformation;
