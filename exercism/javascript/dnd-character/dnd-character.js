//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (ability) => {
  if (ability > 18) throw new Error('Ability scores can be at most 18');
  if (ability < 3) throw new Error('Ability scores must be at least 3');

  return Math.floor((ability - 10) / 2);
};

export class Character {
  static BASE_HP = 10;
  static DIE_SIDES = 6;
  constructor() {
    const roll = Character.rollAbility;
    this._strength = roll();
    this._dexterity = roll();
    this._constitution = roll();
    this._intelligence = roll();
    this._wisdom = roll();
    this._charisma = roll();
  }

  static rollAbility() {
    return Array
      .from({ length: 4 }, () => Math.floor(Math.random() * Character.DIE_SIDES + 1))
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((sum, roll) => sum + roll);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return Character.BASE_HP + abilityModifier(this.constitution);
  }
}
