import { Modal, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

interface BaseModalProps {
  isOpen: boolean;
  handleClose: () => void;
  hasCloseBtn: boolean;
  textAlign?: string;
}

const BaseModal: React.FC<BaseModalProps> = ({
  children,
  isOpen,
  handleClose,
  hasCloseBtn,
  textAlign,
}) => {
  const styleProps = { textAlign };
  const classes = useStyles(styleProps);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      disableBackdropClick
      disableEscapeKeyDown
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.BaseModalStyle}
    >
      <div className={classes.modalContainer}>
        {hasCloseBtn && (
          <div className={classes.modalContainerClose}>
            <Button
              variant="outlined"
              className={classes.closeButton}
              onClick={handleClose}
            >
              &#x2715;
            </Button>
          </div>
        )}
        {children}
      </div>
    </Modal>
  );
};

export default BaseModal;
