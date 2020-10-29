import React from 'react';
import useStyles from './styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioButton: React.FC<RadioProps> = (props) => {
  const classes = useStyles();
  const { children, onChange, disabled, checked, value } = props;

  return (
    <FormControlLabel
      value={value}
      labelPlacement="end"
      label={children}
      className={classes.root}
      control={
        <Radio
          onChange={onChange}
          value={value}
          disabled={disabled}
          checked={checked}
          className={classes.styledRadio}
        />
      }
    />
  );
};

export default RadioButton;
