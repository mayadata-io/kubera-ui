import React from 'react';
import { useStyles } from './styles';
import { TypographyBaseProps } from '../base';
import Typography from '@material-ui/core/Typography';

type Variant = 'small' | undefined;

interface ParagraphProps extends TypographyBaseProps {
  variant?: Variant;
}

const Paragraph: React.FC<ParagraphProps> = ({ variant, children }) => {
  const classes = useStyles();

  function getVarinat(variant: Variant): string {
    switch (variant) {
      case 'small':
        return classes.small;
      default:
        return classes.primary;
    }
  }

  return (
    <Typography className={`${getVarinat(variant)}`}>{children}</Typography>
  );
};

export { Paragraph };
