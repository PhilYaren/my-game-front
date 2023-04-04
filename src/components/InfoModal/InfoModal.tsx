import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function InfoModal({ open, setOpen }: any): JSX.Element {
  // const [open, setOpen] = useState(true);
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
        <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: 'rgb(28,61,131)', color: 'rgb(223, 148, 3)', fontFamily: 'SI' }}>{'Инструкция'}</DialogTitle>
        <DialogContent sx={{ backgroundColor: 'rgb(28,61,131)' }}>
          <DialogContentText id="alert-dialog-description" sx={{ color: 'rgb(235,215,56)' }}>
            Инструкция
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'rgb(28,61,131)', color: 'rgb(223, 148, 3)', fontFamily: 'SI' }}>
          <Button onClick={handleClose} sx={{ color: 'rgb(223, 148, 3)', fontFamily: 'SI' }}>Понятно</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
