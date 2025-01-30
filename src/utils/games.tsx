import GridIcon from '../components/Icons/GridIcon';
import LetterIcon from '../components/Icons/LetterIcon';
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
  {
    name: 'wordle',
    icon: <LetterIcon />,
  },
] as const;
