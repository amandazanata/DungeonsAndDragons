import { EnergyType } from '../Energy';
import Archetype from './Archetype';

const WARRIOR_ENERGYTYPE = 'stamina';

class Warrior extends Archetype {
  static createdInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = WARRIOR_ENERGYTYPE;
    Warrior.createdInstances += 1;
  }
  
  static override createdArchetypeInstances(): number {
    return Warrior.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;