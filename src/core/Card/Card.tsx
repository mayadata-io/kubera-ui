import React from 'react';
import useStyles from './styles';

interface CardProps {
  glow: boolean;
  width: string;
  height: string;
}

const Card: React.FC<CardProps> = ({ glow, width, height, children }) => {
  const classes = useStyles({ glow, width, height });
  return <div className={classes.root}>{children}</div>;
};

export { Card };
