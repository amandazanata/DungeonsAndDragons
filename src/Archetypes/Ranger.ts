import { EnergyType } from '../Energy';
import Archetype from './Archetype';

const RANGER_ENERGYTYPE = 'stamina';

class Ranger extends Archetype {
  static createdInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = RANGER_ENERGYTYPE;
    Ranger.createdInstances += 1;
  }
  
  static override createdArchetypeInstances(): number {
    return Ranger.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;