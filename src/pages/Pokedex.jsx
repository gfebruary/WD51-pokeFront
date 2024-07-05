import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import PokeInfo from "../components/PokeInfo.jsx";
import "../animations.css";
import "../style.css";

const Pokedex = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokeDex, setPokeDex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://wd51-pokeserver.onrender.com/api/v1/pokes/"
        );
        setPokeData(res.data.pokeBase);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonData();
  }, []);

  const handlePokemonClick = (poke) => {
    setPokeDex(poke);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPokemons = pokeData.filter((pokemon) =>
    pokemon.name.english.toLowerCase().includes(searchTerm)
  );

  return (
    <main className="bg-blue-100 p-4">
      <div className="container mx-auto p-4">
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="w-1/4 p-2 mb-4 border bg-white text-orange-500 font-bold border-blue-300 rounded"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Card
            pokemon={filteredPokemons}
            loading={loading}
            infoPokemon={handlePokemonClick}
          />
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

export default Pokedex;
