import { games } from '../utils/games';

export type Game = (typeof games)[number]['name'] | null;

export type LetterStatus = 'incorrect' | 'correct' | 'missplaced' | null;

export interface UsedLetter {
  letter: string;
  status: LetterStatus;
}

export type GameEndType = 'win' | 'lose';
