import React from 'react';
import { Menu } from '@material-ui/core';
import { useStyles } from './styles';
import { BasePropsMenu } from './base';

interface CustomDropdownProps extends BasePropsMenu {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}
const Dropdown: React.FC<CustomDropdownProps> = ({
  children,
  anchorEl,
  handleClose,
}) => {
  const classes = useStyles();
  const showDropdown = Boolean(anchorEl) ? classes.show : classes.hide;
  return (
    <div className={classes.root} data-testid="dropdownElement">
      <div className={`${classes.triangleUp} ${showDropdown}`}></div>
      <Menu
        open={Boolean(anchorEl)}
        className={classes.customDropdown}
        variant="menu"
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </div>
  );
};

export { Dropdown };
