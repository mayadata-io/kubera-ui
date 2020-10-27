import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  primary: {
    fontSize: '1rem',
    fontWeight: 'normal',
    color: theme.palette.text.primary,
  },

  small: {
    fontSize: '0.75rem',
    fontWeight: 'normal',
    color: theme.palette.text.primary,
  },
}));

export { useStyles };
