import Race from './Race';

const HALFLING_MAXLIFEPOINTS = 60;

class Halfling extends Race {
  private _maxLifePoints: number;
  static createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = HALFLING_MAXLIFEPOINTS;
    Halfling.createdInstances += 1;
  }
  
  static override createdRacesInstances(): number {
    return Halfling.createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;