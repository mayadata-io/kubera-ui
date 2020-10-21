import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  disabledInput: {
    border: '0.0.625rem solid',
    background: theme.palette.background.paper,
    color: theme.palette.text.disabled,
    '& fieldset': {
      borderColor: theme.palette.border.main,
    },
  },
  primaryInput: {
    border: '0.0.625rem solid',
    background: theme.palette.background.paper,
    '& fieldset': {
      borderColor: theme.palette.border.main,
    },
    '&:hover': {
      '& fieldset': {
        borderColor: `${theme.palette.highlight} !important`,
      },
    },
  },
  errorInput: {
    background: theme.palette.background.paper,
    border: '0.0.625rem solid',
    color: theme.palette.text.primary,
    borderRadius: '4px',
  },
  successInput: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: '0.0.625rem solid',
    '& fieldset': {
      borderColor: `${theme.palette.border.success} !important`,
    },
    borderRadius: '4px',
  },
  primaryLabel: {
    color: theme.palette.text.hint,
    '&[data-shrink="true"]': {
      color: theme.palette.highlight,
    },
  },
  errorLabel: {
    color: theme.palette.error.main,
    '&[data-shrink="true"]': {
      color: theme.palette.error.main,
    },
  },
  successLabel: {
    color: theme.palette.success.main,
    '&[data-shrink="true"]': {
      color: theme.palette.success.main,
    },
  },
}));

export { useStyles };
