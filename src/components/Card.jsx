import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  const typeColors = {
    Bug: "bg-green-500",
    Grass: "bg-green-700",
    Poison: "bg-purple-500",
    Normal: "bg-gray-400",
    Water: "bg-blue-500",
    Ground: "bg-yellow-500",
    Ghost: "bg-purple-700",
    Dragon: "bg-red-300",
    Flying: "bg-blue-300",
    Fire: "bg-red-800",
    Fighting: "bg-orange-700",
    Rock: "bg-gray-700",
    Electric: "bg-yellow-300",
    Fairy: "bg-pink-400",
    Psychic: "bg-pink-600",
    Ice: "bg-blue-200",
    default: "bg-purple-300",
  };

  return (
    <>
      {loading ? (
        <h1 className="text-2xl font-bold text-center">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pokemon.map((item) => {
            const primaryType = item.type[0];
            const colorClass = typeColors[primaryType] || typeColors.default;
            return (
              <div
                className={`p-4 rounded shadow-lg cursor-pointer transform transition-transform hover:scale-105 ${colorClass}`}
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2 className="text-xl text-orange-500 font-bold text-center capitalize">
                  {item.name.english}
                </h2>
                <img
                  src={item.images.png}
                  alt={item.name.english}
                  className="w-24 h-24 mx-auto"
                />
                <p className="text-white text-center font-bold text-xl mb-2">
                  {item.type.join(", ")}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Card;

