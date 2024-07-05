const PokemonDisplay = ({ pokemon, imageURL, transformStyle, cpuChoice }) => {
  if (!pokemon) {
    return null; // maybe cool spinner?
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={`${imageURL}/${pokemon.id}.gif`}
        alt={pokemon.name.english}
        className="mb-2 h-36"
        style={{ transform: transformStyle }}
      />
      <h2 className="text-2xl font-bold mb-2">
        {pokemon.name.english} (Level: 50)
      </h2>
      <p>HP: {pokemon.currentHP}</p>
      <p>ATT: {pokemon.base.Attack}</p>
      <p>DEF: {pokemon.base.Defense}</p>
      {cpuChoice && (
        <p className="text-lg font-semibold">CPU chose: {cpuChoice}</p>
      )}
    </div>
  );
};

export default PokemonDisplay;
