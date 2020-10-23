import React from 'react';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

type Type = 'bold' | undefined;

interface HeaderTextProps {
  type?: Type;
  children: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({ type, children }) => {
  const classes = useStyles();

  function getType(type: Type): string {
    switch (type) {
      case 'bold':
        return classes.bold;
      case undefined:
        return classes.primary;
    }
  }

  return <Typography className={`${getType(type)}`}>{children}</Typography>;
};

export { HeaderText };
