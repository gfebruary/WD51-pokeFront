import React, { useState } from "react";
import useImportData from "../hooks/useImportData";
import ChooseRandomPokemon from "../components/ChooseRandomPokemon";
import DamageCalculation from "../components/DamageCalculation";

const BattleScreen = () => {
  const pokemonURL = "https://wd51-pokeserver.onrender.com/api/v1/pokes/";
  const { data, error, loading } = useImportData(pokemonURL);
  const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown";

  const choices = ["Rock", "Paper", "Scissors"];

  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [cpuPokemon, setCpuPokemon] = useState(null);
  const [playerChoice, setPlayerChoice] = useState("Rock");
  const [cpuChoice, setCpuChoice] = useState("");
  const [result, setResult] = useState("");
  const [damageMessage, setDamageMessage] = useState("");

  const handlePlayerPokemonSelected = (pokemon) => {
    setPlayerPokemon({ ...pokemon, currentHP: pokemon.base.HP });
  };

  const handleCpuPokemonSelected = (pokemon) => {
    setCpuPokemon({ ...pokemon, currentHP: pokemon.base.HP });
  };

  const handleSubmit = () => {
    // ------------------------Generate CPU choice ------------------------
    const randomCpuChoice = choices[Math.floor(Math.random() * choices.length)];
    setCpuChoice(randomCpuChoice);

    // ------------------------Determine result using randomCpuChoice directly ------------------------
    if (playerChoice === randomCpuChoice) {
      setDamageMessage("");
      setResult("It's a tie!");
    } else if (
      (playerChoice === "Rock" && randomCpuChoice === "Scissors") ||
      (playerChoice === "Paper" && randomCpuChoice === "Rock") ||
      (playerChoice === "Scissors" && randomCpuChoice === "Paper")
    ) {
      // ------------------------Player wins------------------------
      setResult(`Player's ${playerChoice} beats CPU's ${randomCpuChoice}!`);

      // ------------------------Calculate damage from player------------------------
      const playerDamage = DamageCalculation(playerPokemon, cpuPokemon);
      setCpuPokemon((prev) => ({
        ...prev,
        currentHP: prev.currentHP - playerDamage,
      }));
      setDamageMessage(`Player does ${playerDamage} damage!`);
    } else {
      // CPU wins
      setResult(`CPU's ${randomCpuChoice} beats Player's ${playerChoice}!`);

      // ------------------------Calculate damage from CPU ------------------------
      const cpuDamage = DamageCalculation(cpuPokemon, playerPokemon);
      setPlayerPokemon((prev) => ({
        ...prev,
        currentHP: prev.currentHP - cpuDamage,
      }));
      setDamageMessage(`CPU does ${cpuDamage} damage!`);
    }
  };

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
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">BATTLE SCREEN</h1>
      <ChooseRandomPokemon
        data={data}
        onPlayerPokemonSelected={handlePlayerPokemonSelected}
        onCpuPokemonSelected={handleCpuPokemonSelected}
      />
      <div className="flex justify-around w-full mb-8">
        {/* ------------------------Player ------------------------*/}
        {playerPokemon && (
          <div className="flex flex-col items-center">
            <img
              src={`${imageURL}/${playerPokemon.id}.gif`}
              alt={playerPokemon.name.english}
              className="mb-2"
              style={{ transform: "scaleX(-1)", height: "125px" }}
            />
            <h2 className="text-2xl font-bold mb-2">
              {playerPokemon.name.english} (Level: 50)
            </h2>
            <p>HP: {playerPokemon.currentHP}</p>
            <p>ATT: {playerPokemon.base.Attack}</p>
            <p>DEF: {playerPokemon.base.Defense}</p>
            <div className="mb-4">
              {choices.map((choice) => (
                <label key={choice} className="block mb-2">
                  <input
                    type="radio"
                    name="playerChoice"
                    value={choice}
                    onChange={(e) => setPlayerChoice(e.target.value)}
                    checked={playerChoice === choice}
                  />
                  {choice}
                </label>
              ))}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}

        {/* ------------------------CPU ------------------------*/}
        {cpuPokemon && (
          <div className="flex flex-col items-center">
            <img
              src={`${imageURL}/${cpuPokemon.id}.gif`}
              alt={cpuPokemon.name.english}
              className="mb-2"
              style={{ height: "125px" }}
            />
            <h2 className="text-2xl font-bold mb-2">
              {cpuPokemon.name.english} (Level: 50)
            </h2>
            <p>HP: {cpuPokemon.currentHP}</p>
            <p>ATT: {cpuPokemon.base.Attack}</p>
            <p>DEF: {cpuPokemon.base.Defense}</p>
            {cpuChoice && (
              <p className="text-lg font-semibold">CPU chose: {cpuChoice}</p>
            )}
          </div>
        )}
      </div>

      {/*------------------------ Result------------------------ */}
      {result && <h2>{result}</h2>}
      {/* ------------------------Damage Message ------------------------ */}
      {damageMessage && <p>{damageMessage}</p>}
    </div>
  );
};

export default BattleScreen;
