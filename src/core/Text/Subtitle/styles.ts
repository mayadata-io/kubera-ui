import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  color?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: (props: StyleProps) =>
      props ? props.color : theme.palette.text.primary,
  },
  primary: {
    fontSize: '1rem',
    fontWeight: 'normal',
  },
  small: {
    fontSize: '0.75rem',
    fontWeight: 'normal',
  },
}));

export { useStyles };
