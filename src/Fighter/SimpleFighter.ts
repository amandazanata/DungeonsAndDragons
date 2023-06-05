import { Attack, ReceiveDamage } from './Fighter';

interface SimpleFighter extends Attack<SimpleFighter>, ReceiveDamage{
  lifePoints: number;
  strength: number; 
}

export default SimpleFighter;