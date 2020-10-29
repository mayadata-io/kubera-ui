import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    width: '1.5rem',
    height: '1.5rem',
    '& svg': {
      display: 'none',
    },
  },
  '@global': {
    '.MuiCheckbox-root': {
      borderRadius: '0.1875rem',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      borderWidth: '0.03125rem',
      borderStyle: 'solid',
      borderColor: theme.palette.border.main,
      '&:hover': {
        borderColor: theme.palette.secondary.main,
      },
      '&:disabled': {
        borderColor: theme.palette.disabledBackground,
      },
    },
    '.Mui-checked': {
      borderColor: theme.palette.secondary.main,
      '& svg': {
        display: 'block',
      },
    },
    '.Mui-disabled': {
      borderColor: theme.palette.text.disabled,
    },
  },
}));

export { useStyles };
