import React, { useState } from 'react'
import GamesList from '../GamesList/GamesList'
import InfoModal from '../InfoModal/InfoModal'

function HomePage (): JSX.Element {
  // const [games, setGames] = useState()
  const games = []
  return (
    <><GamesList games={games}></GamesList><InfoModal></InfoModal></>
  )
}

export default HomePage
