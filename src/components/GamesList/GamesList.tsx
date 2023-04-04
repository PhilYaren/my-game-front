import React from 'react';
import GameCard from '../GameCard/GameCard';
import './list.css';

function GamesList({ games }: any): JSX.Element {
  if (!games.length) {
    return <p>Игры не найдены</p>;
  }

  return (
    <div className='game__section'>
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </div>
  );
}

export default GamesList;
