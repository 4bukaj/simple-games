import { IconProps } from '../../../types/icons';
import { colors } from '../../../utils/colors';

const ChevronLeftIcon = ({ color = colors.gold }: IconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='-5.5 0 26 26'>
      <path
        fill={color}
        fillRule='evenodd'
        d='m5.115 13 9.256-8.4c.831-.83.831-2.17 0-3a2.11 2.11 0 0 0-3.008 0L.596 11.36c-.45.45-.648 1.05-.611 1.64-.037.59.161 1.19.611 1.64l10.767 9.76a2.11 2.11 0 0 0 3.008 0c.831-.83.831-2.17 0-3L5.115 13'
      />
    </svg>
  );
};

export default ChevronLeftIcon;
