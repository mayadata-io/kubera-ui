import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  primary: {
    fontWeight: 'normal',
    fontSize: '1rem',
    color: theme.palette.text.hint,
  },

  small: {
    fontWeight: 'normal',
    fontSize: '0.75rem',
    color: theme.palette.text.hint,
  },
}));

export { useStyles };
