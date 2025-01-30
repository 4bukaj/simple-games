import ReactDom from 'react-dom';
import { useWordleContext } from '../../../../context/WordleContext';
import './styles.css';

const ErrorPopup = () => {
  const { showError } = useWordleContext();

  if (!showError) return null;

  return ReactDom.createPortal(
    <div className='error__wrapper'>Not in word list!</div>,
    document.getElementById('root')
  );
};

export default ErrorPopup;
