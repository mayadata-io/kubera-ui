import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  primary: {
    fontSize: '2.25rem',
    fontWeight: 'normal',
    color: theme.palette.text.primary,
  },

  bold: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
}));

export { useStyles };
