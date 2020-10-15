import React from 'react';
import { useStyles } from './style';
import { Button } from '@material-ui/core';
import { PillsBaseProps } from '../base';

type Variant = 'success' | 'warning' | 'danger' | undefined;

interface BasicPillsProps extends PillsBaseProps {
  children: string;
  variant?: Variant;
}
const LightPills: React.FC<BasicPillsProps> = ({ children, variant }) => {
  const classes = useStyles();
  const getVariant = (variant: Variant) => {
    switch (variant) {
      case 'success':
        return classes.success;
      case 'warning':
        return classes.warning;
      case 'danger':
        return classes.danger;
      default:
        return '';
    }
  };
  return (
    <Button className={`${classes.lightPills} ${getVariant(variant)}`}>
      {children}
    </Button>
  );
};
export { LightPills };
