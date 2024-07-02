const LeaderCard = ({ leader }) => {
  console.log(leader)
  return (
    <li className="flex flex-wrap justify-between items-baseline gap-4 bg-gray-700 px-4">
      <h2 className="font-semibold text-xl">{leader.name}</h2>
      <p>
        S: {leader.fights.score || 0} | 
        W: {leader.fights.wins || 0} | 
        L: {leader.fights.losses || 0} | 
        T: {leader.fights.total || 0}
      </p>
    </li>
  );
}

export default LeaderCard;