import Race from './Race';

const DWARF_MAXLIFEPOINTS = 80;

class Dwarf extends Race {
  private _maxLifePoints: number;
  static createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = DWARF_MAXLIFEPOINTS;
    Dwarf.createdInstances += 1;
  }
  
  static override createdRacesInstances(): number {
    return Dwarf.createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;