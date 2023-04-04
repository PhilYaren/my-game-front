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
import { createTheme } from '@mui/material/styles';
// import font from "../../../public/font/SI Font.ttf";
import { CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['SI Font', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      light: 'rgb(235,215,56)',
      main: 'rgb(235,215,56)',
      dark: 'rgb(223, 148, 3)',
      contrastText: 'white',
    },
    secondary: {
      dark: 'rgb(28,61,131)',
      main: 'rgb(28,61,131)',
      light: 'rgb(40,79,166)',
      contrastText: 'white',
    },
    text: {
      primary: 'rgb(235,215,56)',
      secondary: 'rgb(235,215,56)',
      disabled: 'rgb(235,215,56)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SI Font';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url("../../../public/font/SI Font.ttf");
        }
      `,
    },
  },
});

export default function ModalWindowQuestion({
  setOpen,
  open,
  text,
  timeToAnswer,
  setTime,
  answer,
  name,
  questionId,
  setScore,
  score,
}: any) {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(100);
  const [isAnswered, setAnswer] = useState(false);
  const [isCorrect, setCheck] = useState('none');
  const gameId = useLocation().pathname.split('/').at(-1);
  const dispatch = useDispatch();

  async function createrAnswer() {
    try {
      const response = await fetch(
        `http://localhost:3000/api/answers/${questionId}`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ gameId: parseInt(gameId), answer: input }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        const response = await fetch('http://localhost:3000/api/games', {
          method: 'GET',
          credentials: 'include',
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
    let counter;
    if (timeToAnswer) {
      counter = setInterval(() => {
        if (count > 0) {
          setCount((prev) => prev - 1);
        } else {
          clearTimeout(counter);
          console.log('useEffect timer');
          handleClose();
        }
      }, 100);
    }
    return () => {
      clearInterval(counter);
    };
  }, [timeToAnswer, count]);

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline> */}

      <div>
        <Dialog open={open}>
          <DialogTitle
            sx={{
              backgroundColor: 'rgb(28,61,131)',
              color: 'rgb(223, 148, 3)',
              fontFamily: 'SI',
            }}
          >
            {name}
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: 'rgb(28,61,131)' }}>
            {isAnswered ? (
              <DialogContentText sx={{ color: 'rgb(235,215,56)' }}>
                {isCorrect === 'correct' ? (
                  <span style={{ color: '#9eff00' }}>Верно</span>
                ) : isCorrect === 'incorrect' ? (
                  <span style={{ color: 'red' }}>Неверно</span>
                ) : null}
                <br />
                <span>{answer}</span>
              </DialogContentText>
            ) : (
              <DialogContentText sx={{ color: 'rgb(235,215,56)' }}>
                <progress id="timerProgressBar" max={100} value={count} />
                {isCorrect === 'correct' ? (
                  <span style={{ color: '#9eff00' }}>Верно</span>
                ) : isCorrect === 'incorrect' ? (
                  <span style={{ color: 'red' }}>Неверно</span>
                ) : null}
                <br />
                <span>{text}</span>
              </DialogContentText>
            )}

            {!isAnswered && (
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="answer"
                label="Ваш ответ"
                type="email"
                fullWidth
                value={input}
                variant="standard"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                sx={{ color: 'text.primary' }}
              />
            )}
          </DialogContent>
          {!isAnswered && (
            <DialogActions
              sx={{
                backgroundColor: 'rgb(28,61,131)',
                color: 'rgb(223, 148, 3)',
                fontFamily: 'SI',
              }}
            >
              <Button
                onClick={handleClose}
                sx={{ color: 'rgb(223, 148, 3)', fontFamily: 'SI' }}
              >
                Ответить
              </Button>
            </DialogActions>
          )}
        </Dialog>
      </div>
      {/* </CssBaseline> */}
    </ThemeProvider>
  );
}
