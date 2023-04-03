import React from 'react'
import { useNavigate } from 'react-router-dom'

function GameCard (game: any): JSX.Element {
  const navigate = useNavigate()
  const { title, id, answeredQuestions } = game
  const handleClick: any = (e: Event) => {
    e.preventDefault()
    navigate(`/game/${id}`)
  }

  return (
    <div>
      <h3>{title}</h3>
      {answeredQuestions.length
        ? <button onClick={handleClick}>Продолжить игру</button>
        : <button onClick={handleClick}>Начать игру</button>
      }
    </div>
  )
}

export default GameCard
