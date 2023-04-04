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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ score, setOpen, open }) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/home');
    setOpen(false);
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
