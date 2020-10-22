import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
// import clsx from 'clsx';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { useStyles } from './styles';
import { BaseCheckboxProps } from './base';

interface CheckBoxProps extends BaseCheckboxProps {
  checked: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ disabled, checked }) => {
  const classes = useStyles();
  const [check, setChecked] = useState<boolean>(checked);
  return (
    <Checkbox
      data-testid="checkbox"
      className={classes.root}
      checkedIcon={<CheckOutlinedIcon />}
      disabled={disabled}
      checked={check}
      icon={<span></span>}
      onChange={() => setChecked(!check)}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
    />
  );
};
export { CheckBox };
