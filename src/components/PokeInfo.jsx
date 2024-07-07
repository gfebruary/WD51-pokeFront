import React from "react";

const PokeInfo = ({ data }) => {
  const statColors = {
    hp: "bg-red-500",
    attack: "bg-orange-500",
    defense: "bg-yellow-500",
    "sp. attack": "bg-green-500",
    "sp. defense": "bg-blue-500",
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
            {data.name.english}
          </h1>
          <h1 className="text-2xl font-bold capitalize text-center text-yellow-500">
            {data.name.chinese}
          </h1>
          <img
            src={data.images.svg}
            alt={`${data.name.english} image`}
            className="w-24 h-24 mx-auto mt-2"
          />
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700">Base Stats:</h2>
            <div className="mt-2">
              {Object.entries(data.base).map(([stat, value]) => (
                <div key={stat} className="mb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 capitalize">
                      {stat}
                    </span>
                    <span className="text-sm text-gray-600">{value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${
                        statColors[stat.toLowerCase()] || "bg-gray-400"
                      } h-3 rounded-full`}
                      style={{ width: `${Math.min(value, 100)}%` }}
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


