import React from "react";
import useImportData from "../hooks/useImportData";

const Pokedex = () => {
  const pokemonURL = "https://wd51-pokeserver.onrender.com/api/v1/pokes/";

  // PIXEL ANIMATED POKEMON
  // const pokemonImgURL =
  //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated";

  // MODERN ANIMATED POKEMON
  const pokemonImgURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown";

  //--------------------SHOW POKEMON ON BY DEFAULT
  const showPokemon = true;

  const { data, error, loading } = useImportData(pokemonURL);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        Error: {error.message}
      </div>
    );
  }

  if (!data || !Array.isArray(data.pokeBase)) {
    return (
      <div className="flex items-center justify-center h-full">
        Unexpected data format
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col items-center justify-start pt-20 pb-20">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/245.gif"
        alt="Pokemon"
        className="mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">POKEDEX</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.pokeBase.map((pokemon) => (
          <div key={pokemon.id} className="flex flex-col items-center">
            {showPokemon && (
              <img
                src={`${pokemonImgURL}/${pokemon.id}.gif`}
                alt={pokemon.name.english}
                className="mb-2"
              />
            )}

            <p className="text-lg font-semibold">
              {pokemon.name.english} ({pokemon.id})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
