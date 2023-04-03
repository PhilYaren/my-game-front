/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ModalWindowQuestion({
  setOpen,
  open,
  text,
  timeToAnswer,
  setTime,
  answer,
  name
}) {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(8);
  const [isAnswered, setAnswer] = useState(false);
  const [isCorrect, setCheck] = useState("none");

  const handleClose = (e: any): void => {
    console.log(input, answer);
    if (input.toLowerCase() === answer.toLowerCase()) {
      setCheck("correct");
    } else {
      setCheck("incorrect");
    }

    setTime(false);
    setAnswer(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  useEffect(() => {
    let timer;
    let counter;
    if (timeToAnswer) {
      timer = setTimeout(() => {
        console.log("useEffect timer");
        handleClose();
      }, 8000);
      counter = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
      clearInterval(counter);
    };
  }, [timeToAnswer]);

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          {isAnswered ? (
            <DialogContentText>
              <span>
                {isCorrect === "correct" ? (
                  "Correct!"
                ) : isCorrect === "incorrect" ? (
                  "Failed"
                ) : (
                  null
                )}
             </span>
              <span>{answer}</span>
            </DialogContentText>
          ) : (
            <DialogContentText>
              <span>{count}</span>
              <span>
                {isCorrect === "correct" ? (
                  "Correct!"
                ) : isCorrect === "incorrect" ? (
                  "Failed"
                ) : (
                  null
                )}
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
              onChange={(e) => setInput(e.target.value)}
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
