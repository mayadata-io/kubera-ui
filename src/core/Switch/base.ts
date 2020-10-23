import { ButtonProps } from '@material-ui/core/Button';

export type SwitchBaseProps = Omit<ButtonProps, 'style' | 'variant' | 'color'>;
