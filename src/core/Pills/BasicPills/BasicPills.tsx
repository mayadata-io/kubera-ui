import React from 'react';
import { useStyles } from './style';

type Variant = 'default' | 'selected';

interface PillsProps {
  variant: Variant;
}

const Pills: React.FC<PillsProps> = ({ variant, children }) => {
  const classes = useStyles();
  const getVariant = (variant: Variant) => {
    switch (variant) {
      case 'selected':
        return classes.active;
      default:
        return '';
    }
  };
  return (
    <div className={`${classes.root} ${getVariant(variant)}`}>{children}</div>
  );
};
export { Pills };
