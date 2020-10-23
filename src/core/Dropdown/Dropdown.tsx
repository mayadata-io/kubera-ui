import React from 'react';
import { Menu } from '@material-ui/core';
import { useStyles } from './styles';
import { ButtonFilled } from '../Button/ButtonFilled';

import { BasePropsMenu } from './base';

interface CustomDropdownProps extends BasePropsMenu {
  anchorEl: HTMLElement | null;
}
const Dropdown: React.FC<CustomDropdownProps> = ({ children, anchorEl }) => {
  const classes = useStyles();

  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    anchorEl
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  const showDropdown = Boolean(anchorElement) ? classes.show : classes.hide;
  return (
    <div className={classes.root} data-id="dropdownElement">
      <ButtonFilled
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </ButtonFilled>
      <div className={`${classes.triangleUp} ${showDropdown}`}></div>
      <Menu
        open={Boolean(anchorElement)}
        className={classes.customDropdown}
        variant="menu"
        anchorEl={anchorElement}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </div>
  );
};

export { Dropdown };
