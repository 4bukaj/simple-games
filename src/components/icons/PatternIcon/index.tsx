import { IconProps } from '../../../types/icons';
import { colors } from '../../../utils/colors';

const PatternIcon = ({ color = colors.gold }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='Layer_1'
      data-name='Layer 1'
      viewBox='0 0 24 24'
    >
      <defs>
        <style>
          {`.cls-1{fill:none;stroke:${color};stroke-miterlimit:10;stroke-width:1.91px}`}
        </style>
      </defs>
      <circle cx={3.41} cy={3.41} r={1.91} className='cls-1' />
      <circle cx={12} cy={3.41} r={1.91} className='cls-1' />
      <circle cx={20.59} cy={3.41} r={1.91} className='cls-1' />
      <circle cx={3.41} cy={12} r={1.91} className='cls-1' />
      <circle cx={12} cy={12} r={1.91} className='cls-1' />
      <circle cx={20.59} cy={12} r={1.91} className='cls-1' />
      <circle cx={3.41} cy={20.59} r={1.91} className='cls-1' />
      <circle cx={12} cy={20.59} r={1.91} className='cls-1' />
      <circle cx={20.59} cy={20.59} r={1.91} className='cls-1' />
      <path
        d='M10.65 10.65 4.76 4.76M12 18.68v-4.77M18.68 3.41h-4.77M10.09 3.41H5.32'
        className='cls-1'
      />
    </svg>
  );
};

export default PatternIcon;
