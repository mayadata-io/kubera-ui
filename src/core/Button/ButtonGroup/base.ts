import { ButtonProps } from '@material-ui/core/Button';

export type ButtonGroupBaseProps = Omit<ButtonProps, 'variant' | 'color'>;
