import React from "react";

const PokeInfo = ({ data }) => {
  return (
    <>
      {!data ? (
        <h1 className="text-center text-2xl">
          Select a Pokémon to see details
        </h1>
      ) : (
        <div className="bg-white p-6 rounded-lg">
          <h1 className="text-3xl font-bold capitalize text-center text-gray-800">
            {data.name}
          </h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt={data.name}
            className="w-40 h-40 mx-auto mt-4"
          />
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">Abilities:</h2>
            <div className="flex flex-wrap mt-2">
              {data.abilities.map((poke) => (
                <div
                  key={poke.ability.name}
                  className="mr-2 mb-2 bg-gray-200 p-2 rounded"
                >
                  <h2 className="text-md text-gray-600">{poke.ability.name}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">Base Stats:</h2>
            <div className="flex flex-wrap mt-2">
              {data.stats.map((poke) => (
                <div
                  key={poke.stat.name}
                  className="mr-2 mb-2 bg-gray-200 p-2 rounded"
                >
                  <h3 className="text-md text-gray-600">
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
