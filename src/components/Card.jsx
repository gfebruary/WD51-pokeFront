import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1 className="text-center text-2xl">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pokemon.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded p-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => infoPokemon(item)}
            >
              <h2 className="text-lg font-bold">{item.id}</h2>
              <img
                src={item.sprites.front_default}
                alt={item.name}
                className="w-full h-auto"
              />
              <h2 className="text-xl capitalize">{item.name}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
