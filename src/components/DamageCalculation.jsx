const DamageCalculation = (attacker, defender) => {
  const level = 50;
  const power = 10;
  //const stab -> same type / ability bonus
  //const crit -> critical hit bonus
  //const type1 -> type1 of attack
  //const type2 -> type2 of attack
  //const isSpecial -> check if special attack / damage needed
  const attackerAttack = attacker.base.Attack;
  const defenderDefense = defender.base.Defense;

  let damage = Math.floor(
    (((2 * level) / 5 + 2) * power * (attackerAttack / defenderDefense)) / 50 +
      2
  );

  const randomFactor = Math.random() * (1 - 0.85) + 0.85;
  damage = Math.floor(damage * randomFactor);
  console.log(damage);
  return damage;
};

export default DamageCalculation;
