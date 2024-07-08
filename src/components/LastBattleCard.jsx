import useAppState from "../hooks/useAppState";
import "../animations.css";




const LastBattleCard = ({ battle }) => {
  const { pokemons } = useAppState();
  const pokeInfo = id => {
    const curPoke = pokemons?.pokeData.pokeBase[id - 1]
    return {
      name: curPoke?.name.english,
      icon: curPoke?.images?.svg,
    }
  }
  const resultColor =
    battle.result.toLowerCase() === "win" ? "text-green-500" : "text-red-500";

  return (
    <li className="flex flex-wrap justify-between items-baseline gap-2 bg-gray-100 shadow-md p-2 rounded-md">
      <div>
        <span className="font-semibold text-xl text-orange-500">
          <span className="font-normal">{battle.fighterID?.name || "Deleted"} as </span>{pokeInfo(battle.fighterPokemonId).name}
          <img className="inline h-[1cap] ps-2 font-extralight" src={pokeInfo(battle.fighterPokemonId).icon} alt={pokeInfo(battle.fighterPokemonId).name} />
        </span>
        <span className="text-gray-700"> vs </span>
        <span className="font-semibold text-xl text-blue-500">
          <span className="font-normal">CPU as </span>{pokeInfo(battle.computerPokemonId).name}
          <img className="inline h-[1cap] ps-2 font-extralight" src={pokeInfo(battle.computerPokemonId).icon} alt={pokeInfo(battle.computerPokemonId).name} />
        </span>
      </div>
      <div className="text-gray-700">
        <span className="font-bold text-2xl">
          <span
            className={`inline-block ${resultColor} animate-bounce`}
            style={{
              animationDuration: "1s",
              animationIterationCount: "infinite",
            }}
          >
            {battle.result.toLowerCase()}
          </span>
        </span>
      </div>
    </li>
  );
};

export default LastBattleCard;





// //lastBattle
// const LastBattleCard = ({ battle }) => (
//   <li className="flex flex-wrap justify-between items-baseline gap-2 bg-gray-700 px-4">
//     <div>
//       <span className="font-semibold text-xl">{battle.fighterID?.name || "Deleted"} (#{battle.fighterPokemonId})</span>
//       <span> vs </span>
//       <span className="font-semibold text-xl">CPU (#{battle.computerPokemonId})</span>
//     </div>
//     <div>Result: <span className="font-semibold text-xl">{battle.result.toUpperCase()}</span></div>
//   </li>
// );

// export default LastBattleCard;