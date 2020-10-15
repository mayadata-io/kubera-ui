import { Modal as KuberaModal, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  hasCloseBtn: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, hasCloseBtn }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <KuberaModal
        open={isOpen}
        onClose={handleClose}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </KuberaModal>
    </div>
  );
};

export default Modal;
