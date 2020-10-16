import React from 'react';
import { useStyles } from './style';

const BasicPills: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
export { BasicPills };
