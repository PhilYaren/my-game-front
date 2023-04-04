import React, { useState } from "react";
import ModalWindowQuestion from "../ModalWindowQuestion/ModalWindowQuestion";
import './table.css'

export default function SingleQuestionField({ score, text, answer, name }): JSX.Element {
  const [open, setOpen] = useState(false);
  const [timeToAnswer, setTime] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setTime(true)
  };

  return (
  <td id="tableTd" >
    <div onClick={handleClickOpen}>
      {score}
    </div>
    <ModalWindowQuestion setOpen={setOpen} open={open} text={text} timeToAnswer={timeToAnswer} setTime={setTime} answer={answer} name={name} />
  </td>
  )
}
