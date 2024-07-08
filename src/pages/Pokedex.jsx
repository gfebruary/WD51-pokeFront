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
  const [selectedType, setSelectedType] = useState(""); // New state for selected type

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

  const handleTypeChange = (type) => {
    setSelectedType(type === "" ? "" : type);
  };

  const filteredPokemons = pokeData
    .filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(searchTerm)
    )
    .filter((pokemon) =>
      selectedType ? pokemon.type.includes(selectedType) : true
    );

  const buttonTypes = [
    "Bug",
    "Grass",
    "Poison",
    "Normal",
    "Water",
    "Ground",
    "Ghost",
    "Dragon",
    "Flying",
    "Fire",
    "Fighting",
    "Rock",
    "Electric",
    "Fairy",
    "Psychic",
    "Ice",
  ];

  return (
    <main className="bg-blue-100 p-4">
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="w-full md:w-1/2 lg:w-1/3 p-2 mb-4 border bg-white text-orange-500 font-bold border-blue-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            className={`px-4 py-2 mb-4 md:mb-0 md:ml-4 text-lg rounded ${
              selectedType === ""
                ? "bg-orange-500 text-green-500 font-bold"
                : "bg-orange-300 text-green-500 font-bold hover:bg-orange-600 transition-colors duration-200"
            }`}
            onClick={() => handleTypeChange("")}
          >
            All Pokemons
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {buttonTypes.map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded ${
                selectedType === type
                  ? "bg-green-500 text-orange-500 font-bold"
                  : "bg-green-300 text-orange-500 font-bold hover:bg-green-600 transition-colors duration-200"
              }`}
              onClick={() => handleTypeChange(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <Card
          pokemon={filteredPokemons}
          loading={loading}
          infoPokemon={handlePokemonClick}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
            <button
              className="absolute top-0 right-0 mr-4 text-4xl font-bold text-red-600 hover:text-gray-800"
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
