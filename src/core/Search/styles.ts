import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '10.18rem',
    color: theme.palette.text.primary,
    '&:before': {
      borderBottom: `0.0625rem solid ${theme.palette.border.main}`,
    },
  },
}));

export { useStyles };
