import GridIcon from '../components/Icons/GridIcon';
import PatternIcon from '../components/Icons/PatternIcon';
import { colors } from './colors';

export const games = [
  {
    name: 'findPairs',
    icon: <GridIcon color={colors.gold} />,
  },
  {
    name: 'matchPattern',
    icon: <PatternIcon color={colors.gold} />,
  },
  // More games to come
] as const;
