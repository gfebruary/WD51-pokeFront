import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1 className="text-2xl font-bold text-center">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pokemon.map((item) => (
            <div
              className="bg-white p-4 rounded shadow-lg cursor-pointer transform transition-transform hover:scale-105"
              key={item.id}
              onClick={() => infoPokemon(item)}
            >
              <h2 className="text-xl font-bold text-center capitalize">
                {item.name}
              </h2>
              <img
                src={item.sprites.front_default}
                alt={item.name}
                className="w-24 h-24 mx-auto"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
