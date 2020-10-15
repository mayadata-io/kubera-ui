import React, { useState } from 'react';
import { useStyles } from './style';
import { Button } from '@material-ui/core';

type selectType = true | false;
const BasicPills: React.FC = ({ children }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState<selectType>(false);
  return (
    <Button
      onClick={() => setSelected(!selected)}
      className={`${classes.root} ${selected ? classes.selected : ''}`}
    >
      {children}
    </Button>
  );
};
export { BasicPills };
