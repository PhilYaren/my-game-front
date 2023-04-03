import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ModalWindowQuestion({ setOpen, open }): JSX.Element {
  const handleClose = (e: any): void => {
    console.log(13123131312313123123)
    console.log(setOpen)
    e.preventDefault()
    setOpen(false);
    console.log(open)
  };
  return (
 
      <div>
          <Dialog open={open} >
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here.
                We will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </Dialog>
      </div>
 
  );
}
