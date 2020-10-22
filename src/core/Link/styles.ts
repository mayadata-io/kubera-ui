import { fade, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: 'normal',
    textDecorationLine: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
      boxShadow: `0px 0.25em 0.313em -0.125em ${fade(
        theme.palette.highlight,
        0.7
      )}`,
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
