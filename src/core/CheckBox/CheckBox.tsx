import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { useStyles } from './styles';
import { CheckboxProps } from '@material-ui/core/Checkbox';

const CheckBox: React.FC<CheckboxProps> = ({ disabled, checked }) => {
  const classes = useStyles();
  const [check, setChecked] = useState<boolean | undefined>(checked);
  return (
    <Checkbox
      data-testid="checkbox"
      className={classes.root}
      checkedIcon={<CheckOutlinedIcon />}
      disabled={disabled}
      checked={check}
      onChange={() => setChecked(!check)}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
    />
  );
};
export { CheckBox };
