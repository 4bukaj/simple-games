import { useEffect, useState } from 'react';
import './styles.css';
import Card from './components/Card';
import confetti from 'canvas-confetti';

const FindPairs = () => {
  const symbols = ['🌍', '🖥️', '☁️', '🔒', '📦', '⚙️', '🔌', '🔧'];
  const [isWin, setIsWin] = useState(false);
  const [cards, setCards] = useState<string[]>([]);
  const [guessedCards, setGuessedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const handleResetGame = () => {
    setIsWin(false);
    setGuessedCards([]);
    setMatchedCards([]);
    shuffleCards();
  };

  const handleFlipCard = (cardIndex: number) => {
    switch (guessedCards.length) {
      case 0: {
        setGuessedCards([cardIndex]);
        break;
      }
      case 1: {
        if (cards[guessedCards[0]] === cards[cardIndex]) {
          setMatchedCards((prevState) => [
            ...prevState,
            guessedCards[0],
            cardIndex,
          ]);
        }
        setGuessedCards([...guessedCards, cardIndex]);
        setTimeout(() => {
          setGuessedCards([]);
        }, 1000);
        break;
      }
      default:
        break;
    }
  };

  const shuffleCards = () => {
    const shuffledCards = [...symbols, ...symbols].sort(
      () => 0.5 - Math.random()
    );

    setCards(shuffledCards);
  };

  // prepare cards on initial load
  useEffect(() => {
    shuffleCards();
  }, []);

  // check for win
  useEffect(() => {
    if (matchedCards.length && matchedCards.length === cards.length) {
      setIsWin(true);
      confetti();
    }
  }, [matchedCards]);

  return (
    <div className='find-pairs__wrapper'>
      {isWin && <h1 className='find-pairs__headline'>You win!</h1>}
      <div className='cards__wrapper'>
        {cards.map((card, index) => (
          <Card
            key={index}
            symbol={card}
            isFlipped={
              guessedCards.includes(index) || matchedCards.includes(index)
            }
            onClick={() => handleFlipCard(index)}
          />
        ))}
      </div>
      {isWin && (
        <div>
          <button onClick={handleResetGame}>Reset the game</button>
        </div>
      )}
    </div>
  );
};

export default FindPairs;
