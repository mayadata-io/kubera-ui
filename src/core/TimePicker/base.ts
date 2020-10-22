import { KeyboardTimePickerProps } from '@material-ui/pickers';

export type BaseTimePickerProps = Omit<KeyboardTimePickerProps, 'value'>;
