import { EnergyType } from '../Energy';
import Archetype from './Archetype';

const NECROMANCER_ENERGYTYPE = 'mana';

class Necromancer extends Archetype {
  static createdInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = NECROMANCER_ENERGYTYPE;
    Necromancer.createdInstances += 1;
  }
  
  static override createdArchetypeInstances(): number {
    return Necromancer.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;