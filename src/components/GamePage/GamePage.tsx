import React, { useState } from 'react';
import GameField from '../GameField/GameField';
import AlertDialogSlide from '../ModalWindowGameEnd/ModalWindowGameEnd';
import { getUser } from '../../redux/user/user.selector';
import { useSelector } from 'react-redux';
import './gamePage.css'

export default function GamePage(): JSX.Element {
  const user: any = useSelector(getUser);
  const score: any = 300;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div id="divTable">
      <h4>GamePage</h4>
      <span>{user?.userName}</span>
      <span>Текущий счет: {score}</span>
      <GameField />
      <button type="button" onClick={handleClickOpen}>
        <span>Завершить игру</span>
      </button>
      <AlertDialogSlide score={score} setOpen={setOpen} open={open} />
    </div>
  );
}
