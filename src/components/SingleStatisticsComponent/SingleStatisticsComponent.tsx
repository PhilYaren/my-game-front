/* eslint-disable react/prop-types */
import React from 'react'

export default function SingleStatisticsComponent ({name, score, date}): JSX.Element {
  const correctDate = new Date(date)
  return (
    <li>Игра в паке:{name}, итоговый счет:{score}, сыграно:{correctDate.toLocaleDateString()}</li>
  )
}
