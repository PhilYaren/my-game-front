/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useLocation } from 'react-router-dom';
import { setGames } from '../../redux/game/games.action';
import { useDispatch } from 'react-redux';

export default function ModalWindowQuestion ({
  setOpen,
  open,
  text,
  timeToAnswer,
  setTime,
  answer,
  name,
  questionId,
  setScore,
  score
}) {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(8);
  const [isAnswered, setAnswer] = useState(false);
  const [isCorrect, setCheck] = useState('none');
  const gameId = useLocation().pathname.split('/').at(-1);
  const dispatch = useDispatch();

  async function createrAnswer () {
    try {
      const response = await fetch(
        `http://localhost:3000/api/answers/${questionId}`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ gameId: parseInt(gameId), answer: input })
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        const response = await fetch('http://localhost:3000/api/games', {
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        console.log('response games', data);
        dispatch(setGames(data));
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleClose = (e: any): void => {
    console.log(input, answer);
    if (input.toLowerCase() === answer.toLowerCase()) {
      setCheck('correct');
      setScore((prev) => prev + score);
    } else {
      setCheck('incorrect');
    }

    setTime(false);
    setAnswer(true);
    setTimeout(() => {
      setOpen(false);
      createrAnswer();
    }, 2000);
  };

  useEffect(() => {
    // let timer;
    let counter;
    if (timeToAnswer) {
      // timer = setTimeout(() => {
      // }, 8000);
      counter = setInterval(() => {
        if (count > 0) {
          setCount((prev) => prev - 1);
        } else {
          clearTimeout(counter);
          console.log('useEffect timer');
          handleClose();
        }
      }, 1000);
    }
    return () => {
      // clearTimeout(timer);
      clearInterval(counter);
    };
  }, [timeToAnswer, count]);

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          {isAnswered ? (
            <DialogContentText>
              <span>
                {isCorrect === 'correct'
                  ? 'Correct!'
                  : isCorrect === 'incorrect'
                    ? 'Failed'
                    : null}
              </span>
              <span>{answer}</span>
            </DialogContentText>
          ) : (
            <DialogContentText>
              <span>{count}</span>
              <span>
                {isCorrect === 'correct'
                  ? 'Correct!'
                  : isCorrect === 'incorrect'
                    ? 'Failed'
                    : null}
              </span>
              <span>{text}</span>
            </DialogContentText>
          )}

          {!isAnswered && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="answer"
              label="Email Address"
              type="email"
              fullWidth
              value={input}
              variant="standard"
              onChange={(e) => { setInput(e.target.value); }}
            />
          )}
        </DialogContent>
        {!isAnswered && (
          <DialogActions>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
