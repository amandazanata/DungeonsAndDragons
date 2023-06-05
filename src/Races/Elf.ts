import Race from './Race';

const ELF_MAXLIFEPOINTS = 99;

class Elf extends Race {
  private _maxLifePoints: number;
  static createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = ELF_MAXLIFEPOINTS;
    Elf.createdInstances += 1;
  }
  
  static override createdRacesInstances(): number {
    return Elf.createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;