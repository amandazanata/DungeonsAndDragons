import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

// type CharacterInfos = {
//   race: Race;
//   archetype: Archetype;
//   maxLifePoints: number;
//   lifePoints: number;
//   strength: number;
//   defense: number;
//   dexterity: number;
//   energy: Energy;
// };

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(private name: string) {
    const randomDexterity = getRandomInt(1, 10);
    const raceDefault = new Elf(name, randomDexterity);
    const archetypeDefault = new Mage(name);
  
    this._race = raceDefault;
    this._archetype = archetypeDefault;
    this._maxLifePoints = (raceDefault.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = randomDexterity;
    this._energy = { 
      type_: archetypeDefault.energyType, amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  public receiveDamage(attackPoints: number): number {
    const takenDamage = (attackPoints - this._defense);

    if (takenDamage > 0) {
      this._lifePoints -= takenDamage;
    }
    
    if (takenDamage <= 0) {
      this._lifePoints -= 1;
    }
    
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
  
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);

    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;