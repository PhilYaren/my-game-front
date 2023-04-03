import React, { useState } from "react";
import GameField from "../GameField/GameField";
import AlertDialogSlide from "../ModalWindowGameEnd/ModalWindowGameEnd";

export default function GamePage(): JSX.Element {
  const user: any = { id: 1, userName: "kek" };
  const score: any = 300;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <h4>GamePage</h4>
      <span>{user.userName}</span>
      <span>Текущий счет: {score}</span>
      <GameField />
      <button type="button" onClick={handleClickOpen}>Завершить игру</button>
      <AlertDialogSlide score={score} setOpen={setOpen}/>
    </div>
  );
}
