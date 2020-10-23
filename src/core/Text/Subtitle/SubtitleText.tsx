import React from 'react';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

type Type = undefined | 'small';

interface SubtitleTextProps {
  type?: Type;
  children: string;
}

const SubtitleText: React.FC<SubtitleTextProps> = ({ type, children }) => {
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

export { SubtitleText };
