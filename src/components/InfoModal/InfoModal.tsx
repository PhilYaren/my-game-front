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
        <DialogTitle id="alert-dialog-title">{'Инструкция'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция
            Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция
            Инструкция
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Понятно</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
