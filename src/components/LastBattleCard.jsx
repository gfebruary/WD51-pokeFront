//lastBattle
import React from "react";
import "../animations.css";

const LastBattleCard = ({ battle }) => {
   const resultColor =
    battle.result.toLowerCase() === "win" ? "text-green-500" : "text-red-500";

  return (
    <li className="flex flex-wrap justify-between items-baseline gap-2 bg-gray-100 shadow-md p-2 rounded-md">
      <div>
        <span className="font-semibold text-xl text-orange-500">
          {battle.fighterID?.name || "Deleted"} (#{battle.fighterPokemonId})
        </span>
        <span className="text-gray-700"> vs </span>
        <span className="font-semibold text-xl text-blue-500">
          CPU (#{battle.computerPokemonId})
        </span>
      </div>
      <div className="text-gray-700">
        {/* Result:{" "} */}
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