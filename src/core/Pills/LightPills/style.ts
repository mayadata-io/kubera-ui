import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  lightPills: {
    height: '1.5rem',
    borderRadius: '0.1875rem',
    fontSize: '0.625rem',
    lineHeight: '130.2%',
    fontWeight: 400,
  },
  success: {
    background: theme.palette.success.light,
    color: theme.palette.success.main,
  },
  warning: {
    background: theme.palette.warning.light,
    color: theme.palette.warning.main,
  },
  danger: {
    background: theme.palette.error.light,
    color: theme.palette.error.main,
  },
}));

export { useStyles };
