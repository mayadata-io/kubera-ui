import React from 'react';
import useStyles from './styles';
import Radio from '@material-ui/core/Radio';
import { RadioProps } from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioButton: React.FC<RadioProps> = (props) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      value="end"
      label={props.children}
      className={classes.root}
      control={
        <Radio
          disabled={props.disabled}
          checked={props.disabled}
          className={
            props.disabled && props.disabled
              ? classes.diffStyle
              : classes.styledRadio
          }
        />
      }
    />
  );
};

export default RadioButton;
