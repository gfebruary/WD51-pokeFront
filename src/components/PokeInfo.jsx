import React from "react";

const PokeInfo = ({ data }) => {
  // Define colors for each stat
  const statColors = {
    hp: "bg-red-500",
    attack: "bg-orange-500",
    defense: "bg-yellow-500",
    "special-attack": "bg-green-500",
    "special-defense": "bg-blue-500",
    speed: "bg-purple-500",
  };

  return (
    <>
      {!data ? (
        <h1 className="text-center text-blue-700 text-2xl">
          Select a Pokémon to see details
        </h1>
      ) : (
        <div className="bg-white p-4 rounded-lg">
          <h1 className="text-2xl font-bold capitalize text-center text-orange-500">
            {data.name}
          </h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt={`${data.name} image`}
            className="w-24 h-24 mx-auto mt-2"
          />
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700">Abilities:</h2>
            <div className="flex flex-wrap mt-2">
              {data.abilities.map((poke) => (
                <span
                  key={poke.ability.name}
                  className="mr-2 mb-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
                >
                  {poke.ability.name}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700">Base Stats:</h2>
            <div className="mt-2">
              {data.stats.map((poke) => (
                <div key={poke.stat.name} className="mb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 capitalize">
                      {poke.stat.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {poke.base_stat}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${
                        statColors[poke.stat.name]
                      } h-3 rounded-full`}
                      style={{ width: `${poke.base_stat}%` }}
                      // style={{ width: `${Math.min(poke.base_stat, 150)}%` }}
                    ></div>
                  </div>
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
