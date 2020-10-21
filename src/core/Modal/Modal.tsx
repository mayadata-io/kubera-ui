import {
  Modal as MuiModal,
  Button,
  ModalProps as ModalBaseProps,
} from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';

interface ModalProps extends ModalBaseProps {
  hasCloseBtn: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, hasCloseBtn }) => {
  const classes = useStyles();
  const [open, setIsOpen] = useState(true);

  return (
    <MuiModal
      open={open}
      onClose={() => setIsOpen(false)}
      disableBackdropClick
      disableEscapeKeyDown
      title="Modal"
      aria-labelledby="simple-modal-title"
    >
      <div className={classes.root}>
        {hasCloseBtn && (
          <Button
            variant="outlined"
            className={classes.closeButton}
            onClick={() => setIsOpen(false)}
          >
            &#x2715;
          </Button>
        )}
        {children}
      </div>
    </MuiModal>
  );
};

export default Modal;
