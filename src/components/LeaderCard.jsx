//TopFighters

const LeaderCard = ({ leader }) => {
  const draws = leader.fights.total - leader.fights.wins - leader.fights.losses || 0;
  return (
    <li className="flex flex-wrap justify-between items-baseline gap-2 bg-gray-100 shadow-md p-2 rounded-md">
      <div className="font-semibold text-xl text-teal-500">{leader.name}</div>
      <div className="text-gray-700">
        <span className="font-semibold text-pink-500"> S: </span>
        {leader.fights.score || 0} |
        <span className="font-semibold text-purple-500"> W: </span>
        {leader.fights.wins || 0} |
        <span className="font-semibold text-red-500"> L: </span>
        {leader.fights.losses || 0} |
        <span className="font-semibold text-green-500"> D: </span>
        {draws} |<span className="font-semibold text-blue-500"> T: </span>
        {leader.fights.total || 0}
      </div>
    </li>
  );
};

export default LeaderCard;






// //TopFighters

// const LeaderCard = ({ leader }) => {
//   const draws = leader.fights.total - leader.fights.wins - leader.fights.losses || 0;
//   return (
//     <li className="flex flex-wrap justify-between items-baseline gap-4 bg-gray-700 px-4">
//       <div className="font-semibold text-xl">{leader.name}</div>
//       <div>
//         <span className="font-semibold"> S: </span>{leader.fights.score || 0} |
//         <span className="font-semibold"> W: </span>{leader.fights.wins || 0} |
//         <span className="font-semibold"> L: </span>{leader.fights.losses || 0} |       
//         <span className="font-semibold"> D: </span>{draws} |
//         <span className="font-semibold"> T: </span>{leader.fights.total || 0}
//       </div>
//     </li>
//   );
// };

// export default LeaderCard;
