import LoadingNote from "../components/LoadingNote";
import PokedexCard from "../components/PokedexCard";

import useImportData from "../hooks/useImportData";

const Pokedex = () => {
  const pokemonURL = "https://wd51-pokeserver.onrender.com/api/v1/pokes/";

  //--------------------SHOW POKEMON ON BY DEFAULT
  const showPokemon = false;

  const { data, error, loading } = useImportData(pokemonURL);

  if (loading) {
    return LoadingNote({ msg: "Loading... This may take up to 2 minutes on first load" });
  }

  if (error) {
    return LoadingNote({ msg: error.message });
  }

  if (!data || !Array.isArray(data.pokeBase)) {
    return LoadingNote({ msg: "Unexpected data format" });
  }

  return (
    <main className="h-full flex flex-col items-center justify-start pt-20 pb-20">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/245.gif"
        alt="Pokemon"
        className="mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">POKEDEX</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.pokeBase.map((pokemon) => (
          <PokedexCard key={pokemon.id} pokemon={pokemon} showPokemon={showPokemon} />
        ))}
      </ul>
    </main>
  );
};

export default Pokedex;