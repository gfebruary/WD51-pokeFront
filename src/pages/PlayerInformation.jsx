import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import PokeInfo from "../components/PokeInfo.jsx";
import "../animations.css";
import "../style.css";

const PlayerInformation = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getPokemon = async (results) => {
    const pokemonArray = [];
    for (const item of results) {
      try {
        const result = await axios.get(item.url);
        pokemonArray.push(result.data);
      } catch (error) {
        console.error(`Error fetching Pokémon ${item.name}:`, error);
      }
    }
    pokemonArray.sort((a, b) => (a.id > b.id ? 1 : -1));
    setPokeData(pokemonArray);
  };

  useEffect(() => {
    const pokemon = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      await getPokemon(res.data.results);
      setLoading(false);
    };
    pokemon();
  }, [url]);

  const handlePokemonClick = (poke) => {
    setPokeDex(poke);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="bg-gray-100 p-4">
      <div className="container mx-auto p-4">
        <div className="col-span-2">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={handlePokemonClick}
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
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative rotate-card">
            <button
              className="absolute top-0 right-0 m-4 text-2xl font-bold text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <PokeInfo data={pokeDex} />
          </div>
        </div>
      )}
    </main>
  );
};

export default PlayerInformation;
