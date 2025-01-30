import { games } from '../utils/games';

export type Game = (typeof games)[number]['name'] | null;

export type LetterStatus = 'incorrect' | 'correct' | 'missplaced';
