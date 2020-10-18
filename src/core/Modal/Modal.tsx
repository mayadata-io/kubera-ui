import { Modal as MuiModal, Button } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  hasCloseBtn: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  hasCloseBtn,
  handleClose,
}) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <MuiModal
        open={isOpen}
        onClose={handleClose}
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
    </div>
  );
};

export default Modal;
