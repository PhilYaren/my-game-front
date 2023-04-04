import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GameCard.css'

function GameCard({ game }: any): JSX.Element {
  const navigate = useNavigate();
  const { name, id, answeredQuestions } = game;
  const handleClick: any = (e: Event) => {
    e.preventDefault();
    navigate(`/game/${id}`);
  };

  return (
    <div id="gameCard">
      <h3>{name}</h3>
      {answeredQuestions.length ? (
        <button onClick={handleClick}>Продолжить</button>
      ) : (
        <button onClick={handleClick}>Начать игру</button>
      )}
    </div>
  );
}

export default GameCard;
