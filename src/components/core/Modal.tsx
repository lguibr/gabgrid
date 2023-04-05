import { Box, Card, Container } from "@mui/material";
import Dialog from "@mui/material/Dialog";

import { JSXElementConstructor, PropsWithChildren, ReactElement } from "react";

export type ModalProps = {
  open: boolean;
  handleClose: () => void;
};

function Modal({ open, handleClose, children }: PropsWithChildren<ModalProps>) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Dialog>
  );
}

export default Modal;
