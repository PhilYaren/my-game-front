import React from 'react'

export default function SingleLeaderboardUserRow({userName, score, time}): JSX.Element {
    const correctTime = new Date(time)
  return (
    <li>Пользователь {userName} набрал {score} очков, {correctTime.toLocaleDateString()}</li>
  )
}
