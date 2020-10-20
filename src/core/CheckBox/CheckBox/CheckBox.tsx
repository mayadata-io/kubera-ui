import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useStyles } from './styles';
import { BaseCheckboxProps } from '../base';

interface CheckBoxProps extends BaseCheckboxProps {
  disabled: boolean;
  checked: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ disabled, checked }) => {
  const classes = useStyles();
  const [check, setChecked] = useState<boolean>(checked);
  const iconClass = check ? classes.checkedIcon : classes.icon;
  return (
    <Checkbox
      className={classes.root}
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      disabled={disabled}
      checked={check}
      onChange={() => setChecked(!check)}
      icon={<span className={iconClass} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
    />
  );
};
export { CheckBox };
