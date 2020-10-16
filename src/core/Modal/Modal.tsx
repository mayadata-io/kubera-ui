import { Modal as MuiModal, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  hasCloseBtn: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  hasCloseBtn,
  isOpen,
  handleClose,
}) => {
  const classes = useStyles();
  const body = (
    <div className={classes.root}>
      {hasCloseBtn && (
        <span className={classes.modalContainerClose}>
          <Button
            variant="outlined"
            className={classes.closeButton}
            onClick={handleClose}
          >
            &#x2715;
          </Button>
        </span>
      )}
      {children}
    </div>
  );

  return (
    <div>
      <MuiModal
        open={isOpen}
        onClose={handleClose}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </MuiModal>
    </div>
  );
};

export default Modal;
