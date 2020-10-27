import React from 'react';
import { Typography } from '@material-ui/core';
import { CheckCircle, Cancel } from '@material-ui/icons';
import { ButtonFilled } from '../Button/ButtonFilled';
import { SwitchBaseProps } from './base';
import { useStyles } from './styles';

type Variant = 'default' | 'error' | 'success' | undefined;

interface SwitchProps extends SwitchBaseProps {
  variant?: Variant;
}

const Switch: React.FC<SwitchProps> = ({ variant }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="switch">
      {/* Pass Button */}
      <ButtonFilled
        aria-label="left aligned"
        variant={variant}
        disabled={variant === 'default' || variant === 'error'}
      >
        <CheckCircle />
        <Typography className={classes.typography}>Pass</Typography>
      </ButtonFilled>

      {/* Failed Button */}
      <ButtonFilled
        aria-label="left aligned"
        variant={variant}
        disabled={variant === 'default' || variant === 'success'}
      >
        <Cancel />
        <Typography className={classes.typography}>Fail</Typography>
      </ButtonFilled>
    </div>
  );
};

export { Switch };
