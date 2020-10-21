import { fade, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: 'normal',
    textDecorationLine: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
      boxShadow: `0px 4px 4px -2px ${fade(theme.palette.highlight, 0.7)}`,
    },
    '&:focus': {
      fontWeight: 'bold',
    },
  },
  disabled: {
    pointerEvents: 'none',
    color: theme.palette.disabledBackground,
  },
  pressed: {
    color: theme.palette.secondary.dark,
    fontWeight: 'bold',
  },
}));

export { useStyles };
