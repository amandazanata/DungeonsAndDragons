import { EnergyType } from '../Energy';
import Archetype from './Archetype';

const MAGE_ENERGYTYPE = 'mana';

class Mage extends Archetype {
  static createdInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = MAGE_ENERGYTYPE;
    Mage.createdInstances += 1;
  }
  
  static override createdArchetypeInstances(): number {
    return Mage.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;