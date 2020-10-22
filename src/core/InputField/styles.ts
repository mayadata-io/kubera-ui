import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: '0.0.625rem solid',
    width: '25rem',
    borderRadius: '0.25rem',
    background: theme.palette.background.paper,
    '& fieldset': {
      borderColor: theme.palette.border.main,
    },
  },
  disabled: {
    color: theme.palette.text.disabled,
    width: '25rem',
  },
  primary: {
    '&:hover': {
      '& fieldset': {
        borderColor: `${theme.palette.highlight} !important`,
      },
    },
  },
  error: {
    background: theme.palette.background.paper,
    color: theme.palette.error.main,
    '& label': {
      color: `${theme.palette.error.main} !important`,
    },
  },
  success: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    '& fieldset': {
      borderColor: `${theme.palette.border.success} !important`,
    },
    '& label': {
      color: ` ${theme.palette.success.main} !important`,
    },
  },
}));

export { useStyles };
