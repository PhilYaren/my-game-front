import React, { useState } from 'react';
import ModalWindowQuestion from '../ModalWindowQuestion/ModalWindowQuestion';

export default function SingleQuestionField({
  score,
  text,
  answer,
  name,
  isAnswered,
  questionId,
  setScore,
}: any): JSX.Element {
  const [open, setOpen] = useState(false);
  const [timeToAnswer, setTime] = useState(false);
  console.log(isAnswered);
  const handleClickOpen = () => {
    setOpen(true);
    setTime(true);
  };

  return (
    <td>
      {!isAnswered.length ? (
        <>
          <div onClick={handleClickOpen}>{score}</div>
          <ModalWindowQuestion
            setOpen={setOpen}
            open={open}
            text={text}
            timeToAnswer={timeToAnswer}
            setTime={setTime}
            answer={answer}
            name={name}
            score={score}
            questionId={questionId}
            setScore={setScore}
          />
        </>
      ) : (
        <>
          <div> --- </div>
          <div />
        </>
      )}
    </td>
  );
}
