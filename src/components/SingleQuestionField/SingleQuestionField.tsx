import React, { useState } from "react";
import ModalWindowQuestion from "../ModalWindowQuestion/ModalWindowQuestion";

export default function SingleQuestionField({ score }): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

 

  return (
  <td onClick={handleClickOpen}>
    {score}
    <ModalWindowQuestion setOpen={setOpen} open={open} />
  </td>)
}
