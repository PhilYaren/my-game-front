import React from 'react'
import GameCard from '../GameCard/GameCard'

function GamesList (games: any): JSX.Element {
  if (!games.length) {
    return <p>Игры не найдены</p>
  }

  return (
    <div>
      {games.map(game => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </div>
  )
}

export default GamesList
