import React from 'react';
import { useStyles } from './styles';
import LinearProgress from '@material-ui/core/LinearProgress';

interface ProgressBarProps {
  value: number;
  color: string;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, color }) => {
  const classes = useStyles({ color });
  return (
    <div>
      <label className={classes.label}>
        {label} : {value}
      </label>
      <LinearProgress
        className={classes.root}
        variant="determinate"
        value={value}
      />
    </div>
  );
};
export { ProgressBar };
