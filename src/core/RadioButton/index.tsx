import React from 'react';
import useStyles from './styles';
import { RadioBaseProps } from './base';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface RadioButtonProps extends RadioBaseProps {
  children: string;
  disabled?: boolean;
  checked?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  disabled,
  checked,
}) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      value="end"
      label={children}
      className={classes.RadioLabel}
      control={
        <Radio
          color="primary"
          disabled={disabled}
          checked={checked}
          className={
            checked && disabled ? classes.diffStyle : classes.styledRadio
          }
        />
      }
    />
  );
};

export default RadioButton;
