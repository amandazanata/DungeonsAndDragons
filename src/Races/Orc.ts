import Race from './Race';

const ORC_MAXLIFEPOINTS = 74;

class Orc extends Race {
  private _maxLifePoints: number;
  static createdInstances = 0;
 
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = ORC_MAXLIFEPOINTS;
    Orc.createdInstances += 1;
  }
  
  static override createdRacesInstances(): number {
    return Orc.createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;