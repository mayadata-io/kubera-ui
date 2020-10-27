import React from 'react';
import { useStyles } from './styles';
import { TypographyBaseProps } from '../base';
import Typography from '@material-ui/core/Typography';

type Variant = 'bold' | undefined;

interface HeaderProps extends TypographyBaseProps {
  variant?: Variant;
}

const Header: React.FC<HeaderProps> = ({ variant, children }) => {
  const classes = useStyles();

  function getVariant(variant: Variant): string {
    switch (variant) {
      case 'bold':
        return classes.bold;
      default:
        return classes.primary;
    }
  }

  return (
    <Typography className={`${getVariant(variant)}`}>{children}</Typography>
  );
};

export { Header };
