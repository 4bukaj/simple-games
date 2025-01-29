import GridIcon from '../components/Icons/GridIcon';
import PatternIcon from '../components/Icons/PatternIcon';

export const games = [
  {
    name: 'findPairs',
    icon: <GridIcon />,
  },
  {
    name: 'matchPattern',
    icon: <PatternIcon />,
  },
  // More games to come
] as const;
