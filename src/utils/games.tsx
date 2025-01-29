import GridIcon from '../components/Icons/GridIcon';
import PatternIcon from '../components/Icons/PatternIcon';
import { colors } from './colors';

export const games = [
  {
    name: 'findPairs',
    icon: <GridIcon color={colors.mutedGold} />,
  },
  {
    name: 'matchPattern',
    icon: <PatternIcon color={colors.mutedGold} />,
  },
  // More games to come
] as const;
