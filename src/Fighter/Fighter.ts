import Energy from '../Energy';

export interface Attack<T> {
  attack(enemy: T): void;
}

export interface ReceiveDamage {
  receiveDamage(attackPoints: number): number;
}

interface Fighter extends Attack<Fighter>, ReceiveDamage{
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  special?(enemy: Fighter): void;
  levelUp(): void;
}

export default Fighter;