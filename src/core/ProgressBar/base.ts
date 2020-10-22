import { LinearProgressProps } from '@material-ui/core/LinearProgress';

export type BaseProgressProps = Omit<LinearProgressProps, 'value' | 'color'>;
