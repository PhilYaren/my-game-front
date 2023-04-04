import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useNavigate } from 'react-router-dom';
import { setGames } from '../../redux/game/games.action';
import { useDispatch } from 'react-redux';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ score, setOpen, open, gameId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    async function generateStatistics() {
      const id = Number(gameId);
      const response = await fetch(`http://localhost:3000/api/statistics/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gameId: id }),
      });

      if (response.ok) {
        const response = await fetch('http://localhost:3000/api/games', {
          method: 'GET',
          credentials: 'include',
        });
        const dataGames = await response.json();
        console.log('response games', dataGames);
        dispatch(setGames(dataGames));
        navigate('/home');
        setOpen(false);
      }
    }
    generateStatistics();
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ backgroundColor: 'rgb(28,61,131)', color: 'rgb(223, 148, 3)', fontFamily: 'SI' }}>{'Игра завершена!'}</DialogTitle>
        <DialogContent sx={{ backgroundColor: 'rgb(28,61,131)' }}>
          <DialogContentText id="alert-dialog-slide-description" sx={{ color: 'rgb(235,215,56)' }}>
            Ваш счет: {score}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'rgb(28,61,131)', color: 'rgb(223, 148, 3)', fontFamily: 'SI' }}>
          <Button onClick={handleClose} sx={{ color: 'rgb(223, 148, 3)', fontFamily: 'SI' }}>Перейти домой</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
