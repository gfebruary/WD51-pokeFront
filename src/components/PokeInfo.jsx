import React from "react";

const PokeInfo = ({ data }) => {
  return (
    <>
      {!data ? (
        <h1 className="text-center text-2xl">
          Select a Pokémon to see details
        </h1>
      ) : (
        <div className="bg-white shadow-md rounded p-4">
          <h1 className="text-2xl font-bold capitalize">{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt={data.name}
            className="w-full h-auto"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Abilities:</h2>
            <div className="flex flex-wrap">
              {data.abilities.map((poke) => (
                <div
                  key={poke.ability.name}
                  className="mr-2 mb-2 bg-gray-200 p-2 rounded"
                >
                  <h2 className="text-md">{poke.ability.name}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Base Stats:</h2>
            <div className="flex flex-wrap">
              {data.stats.map((poke) => (
                <div
                  key={poke.stat.name}
                  className="mr-2 mb-2 bg-gray-200 p-2 rounded"
                >
                  <h3 className="text-md">
                    {poke.stat.name}: {poke.base_stat}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeInfo;
