import { RadioProps } from '@material-ui/core/Radio';
export type RadioBaseProps = Omit<
  RadioProps,
  'children' | 'checked' | 'disabled'
>;
