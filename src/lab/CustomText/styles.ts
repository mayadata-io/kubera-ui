import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.paper,
    '& label': {
      color: theme.palette.text.disabled,
      paddingLeft: '1rem',
      paddingTop: '0.5rem',
    },
    '& .MuiFormLabel-root.Mui-disabled ': {
      color: theme.palette.text.disabled,
      paddingTop: '0rem',
    },
    '& .MuiInputBase-input ': {
      padding: `0rem`,
      margin: '0rem',
    },
    '& .MuiInputBase-root ': {
      padding: `0.5rem`,
      margin: '0.5rem',
    },
    '& .MuiOutlinedInput-root ': {
      padding: `0.5rem`,
      margin: '0.5rem',
    },
    '& .MuiInput-underline:before': {
      padding: 0,
      borderColor: 'red',
      borderWidth: '0rem',
    },

    '& input:valid + fieldset': {
      borderColor: theme.palette.primary.dark,
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: theme.palette.border.error,
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '& input:valid:hover + fieldset': {
      borderColor: theme.palette.primary.dark,
    },
  },
  editBtn: {
    color: theme.palette.text.primary,
  },
  saveBtn: {
    color: theme.palette.text.primary,
  },
  inputText: {
    width: '40.75rem',
    color: theme.palette.text.primary,
    paddingTop: theme.spacing(0.375),
  },
  helperMessage: {
    width: '40.75rem',
    color: theme.palette.error.main,
    paddingTop: theme.spacing(0.375),
  },
}));

export { useStyles };
