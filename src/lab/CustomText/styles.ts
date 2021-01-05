import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // color: theme.palette.text.primary,
    background: theme.palette.background.paper,

    '& input:valid + fieldset': {
      borderColor: theme.palette.primary.dark,
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: theme.palette.primary.dark,
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderColor: theme.palette.primary.dark,
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
    '& input:valid:hover + fieldset': {
      borderColor: theme.palette.primary.dark,
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
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
