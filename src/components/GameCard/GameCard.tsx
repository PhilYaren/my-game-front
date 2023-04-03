import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameCard({ game }: any): JSX.Element {
  const navigate = useNavigate();
  const { name, id, answeredQuestions } = game;
  const handleClick: any = (e: Event) => {
    e.preventDefault();
    navigate(`/game/${id}`);
  };

  return (
    <div>
      <h3>{name}</h3>
      {answeredQuestions.length ? (
        <button onClick={handleClick}>Продолжить игру</button>
      ) : (
        <button onClick={handleClick}>Начать игру</button>
      )}
    </div>
  );
}

export default GameCard;
