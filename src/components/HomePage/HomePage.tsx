import React, { useState } from 'react';
import GamesList from '../GamesList/GamesList';
import InfoModal from '../InfoModal/InfoModal';
import { useSelector } from 'react-redux';
import { getGames } from '../../redux/game/games.selector';

function HomePage({ open, setOpen }): JSX.Element {
  const games = useSelector(getGames);
  return (
    <>
      <GamesList games={games} />
      <InfoModal open={open} setOpen={setOpen} />
    </>
  );
}

export default HomePage;
