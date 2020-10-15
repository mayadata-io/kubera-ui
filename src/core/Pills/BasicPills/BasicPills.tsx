import React, { useState, MouseEvent } from 'react';
import { useStyles } from './style';
import { Button } from '@material-ui/core';

interface BasicPillsProps {
  children: string;
}
type selectType = true | false;
const BasicPills: React.FC<BasicPillsProps> = ({ children }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState<selectType>(false);
  const selectPills = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelected(!selected);
  };
  return (
    <Button
      onClick={selectPills}
      className={`${classes.basicPills} ${selected ? classes.selected : ''}`}
    >
      {children}
    </Button>
  );
};
export { BasicPills };
