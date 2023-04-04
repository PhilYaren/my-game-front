import React, { useEffect, useState } from 'react';
import GameField from '../GameField/GameField';
import AlertDialogSlide from '../ModalWindowGameEnd/ModalWindowGameEnd';
import { getUser } from '../../redux/user/user.selector';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './gamePage.css'

export default function GamePage(): JSX.Element {
  const user: any = useSelector(getUser);
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);
  const gameId = useLocation().pathname.split('/').at(-1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3000/api/games/score/${gameId}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      setScore(data.score);
    }
    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div id="divTable">
      <h4>GamePage</h4>
      <span>{user?.userName}</span>
      <span>Текущий счет: {score}</span>
      <GameField setScore={setScore} />
      <button type="button" onClick={handleClickOpen}>
        <span>Завершить игру</span>
      </button>
      <AlertDialogSlide score={score} setOpen={setOpen} open={open} />
    </div>
  );
}
