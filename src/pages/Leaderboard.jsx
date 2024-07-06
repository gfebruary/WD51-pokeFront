import LoadingNote from "../components/LoadingNote";
import LeaderCard from "../components/LeaderCard";
import useImportData from "../hooks/useImportData";
import dragon from "../assets/149.gif";
import LastBattleCard from "../components/LastBattleCard";

const Leaderboard = ({ srvUrl }) => {
  const leadersUrl = `${srvUrl}/fighters/top`;
  const lastBattlesUrl = `${srvUrl}/battles/last`;
  const { data: topFighters, error, loading } = useImportData(leadersUrl);
  const { data: lastBattles, error: lbError, loading: lbLoading } = useImportData(lastBattlesUrl);

  if (loading || lbLoading) {
    return LoadingNote({
      msg: "Loading...This may take up to 2 minutes on first load",
    });
  }

  if (error || lbError) {
    return LoadingNote({ msg: error.message });
  }

  if (!topFighters || !Array.isArray(topFighters) || !lastBattles || !Array.isArray(lastBattles)) {
    return LoadingNote({ msg: "Unexpected data format" });
  }

  return (
    <main className="bg-blue-100 p-4">
      <div className="container mx-auto p-4">
        <div className="text-center mb-4">
          <img
            src={dragon}
            alt="Pokemon"
            className="mx-auto mb-2 h-20 animate-bounce"
          />
          <h1 className="text-4xl font-bold text-orange-500">LEADERBOARD</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="py-4 px-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-500 mb-2">
              Top fighters
            </h2>
            <ul className="space-y-2">
              {topFighters
                .sort((a, b) => b.fights.score - a.fights.score)
                .map((leader) => (
                  <LeaderCard key={leader.id} leader={leader} />
                ))}
            </ul>
          </div>
          <div className="py-4 px-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-500 mb-2">
              Last battles
            </h2>
            <ul className="space-y-2">
              {lastBattles.map((battle) => (
                <LastBattleCard key={battle.id} battle={battle} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Leaderboard;










// import LoadingNote from "../components/LoadingNote";
// import LeaderCard from "../components/LeaderCard";
// import useImportData from "../hooks/useImportData";
// import dragon from "../assets/149.gif";
// import LastBattleCard from "../components/LastBattleCard";

// const Leaderboard = ({ srvUrl }) => {
//   const leadersUrl = `${srvUrl}/fighters/top`;
//   const lastBattlesUrl = `${srvUrl}/battles/last`;
//   const { data: topFighters, error, loading } = useImportData(leadersUrl);
//   const { data: lastBattles, error: lbError, loading: lbLoading } = useImportData(lastBattlesUrl);

//   if (loading || lbLoading) {
//     return LoadingNote({
//       msg: "Loading...This may take up to 2 minutes on first load",
//     });
//   }

//   if (error || lbError) {
//     return LoadingNote({ msg: error.message });
//   }

//   if (!topFighters || !Array.isArray(topFighters) || !lastBattles || !Array.isArray(lastBattles)) {
//     return LoadingNote({ msg: "Unexpected data format" });
//   }

//   return (
//     <main className="container mx-auto">
//       <img src={dragon} alt="Pokemon" className="mx-auto mb-2" />
//       <h1 className="mb-4 text-4xl font-bold text-center">LEADERBOARD</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <h2 className="text-2xl font-bold">Top fighters</h2>
//           <ul className="grid gap-1">
//             {topFighters.sort((a, b) => b.fights.score - a.fights.score).map((leader) => (
//               <LeaderCard key={leader.id} leader={leader} />
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold">Last battles</h2>
//           <ul className="grid gap-1">
//             {lastBattles.map((battle) => (
//               <LastBattleCard key={battle.id}  battle={battle} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </main>
//   );
// };
// export default Leaderboard;
