import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  basicPills: {
    height: '1.5rem',
    borderRadius: '0.1875rem',
    fontSize: '0.625rem',
    lineHeight: '170%',
    fontWeight: 500,
    background: theme.palette.primary.light,
    color: theme.palette.text.secondary,
  },
  selected: {
    background: theme.palette.primary.main,
  },
}));

export { useStyles };
