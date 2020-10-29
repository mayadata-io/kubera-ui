import React from 'react';
import useStyles from './styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioButton: React.FC<RadioProps> = (props) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      value={props.value}
      labelPlacement="end"
      label={props.children}
      className={classes.root}
      control={
        <Radio
          value={props.value}
          disabled={props.disabled}
          checked={props.checked}
          className={classes.styledRadio}
        />
      }
    />
  );
};

export default RadioButton;
