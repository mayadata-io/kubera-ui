import React from 'react';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

type Type = 'small' | undefined;

interface ParagraphTextProps {
  type?: Type;
  children: string;
}

const ParagraphText: React.FC<ParagraphTextProps> = ({ type, children }) => {
  const classes = useStyles();

  function getType(type: Type): string {
    switch (type) {
      case undefined:
        return classes.primary;
      case 'small':
        return classes.small;
    }
  }

  return <Typography className={`${getType(type)}`}>{children}</Typography>;
};

export { ParagraphText };
