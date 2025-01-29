import './styles.css';

interface ButtonProps {
  label: string;
  variant: 'outlined' | 'solid';
  onClick?: () => void;
}

const Button = ({ label, variant, onClick }: ButtonProps) => {
  return (
    <button className={`button --${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
