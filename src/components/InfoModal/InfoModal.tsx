import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import {useSelector} from "react-redux";
import {getUser} from "../../redux/user/user.selector";

export default function InfoModal({ open, setOpen }: any): JSX.Element {
  // const [open, setOpen] = useState(true);
  const user = useSelector(state => state.UserReducer.user);
  const handleClose = (): any => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: 'rgb(28,61,131)', color: 'rgb(223, 148, 3)', fontFamily: 'SI' }}>
          Привет, {user.userName}!
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: 'rgb(28,61,131)' }}>
          <DialogContentText id="alert-dialog-description" sx={{ color: 'rgb(235,215,56)' }}>
            Чтобы начать игру:
            <br/>
            1. Выбери тему, которая будет интересна для тебя;
            <br/>
            2. Ты можешь начать новую игру или продолжить уже начатую;
            <br/>
            3. Выбери один вопрос из любой категории (в ячейке будет указана стоимость вопроса);
            <br/>
            4. У тебя будет 30 секунд на то, чтобы дать ответ. Напиши ео в поле и нажми на кнопку ответа;
            <br/>
            5. В случае неверного ответа, вопрос будет далее недоступен;
            <br/>
            6. Если ответ верный, то его стоимость будет записана в твою статистику;
            <br/>
            7. Со статистикой всех своих игр ты можешь ознакомиться на вкладке "Статистика".
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'rgb(28,61,131)', color: 'rgb(223, 148, 3)', fontFamily: 'SI' }}>
          <Button onClick={handleClose} sx={{ color: 'rgb(223, 148, 3)', fontFamily: 'SI' }}>Понятно</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
