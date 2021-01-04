import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // color: theme.palette.text.primary,
    background: theme.palette.background.paper,
  },
  editBtn: {
    color: theme.palette.text.secondary,
  },
  saveBtn: {
    color: theme.palette.text.secondary,
  },
  inputText: {
    width: '40.75rem',
    color: theme.palette.text.secondary,
    paddingTop: theme.spacing(0.375),
  },
  helperMessage: {
    width: '40.75rem',
    color: theme.palette.error.main,
    paddingTop: theme.spacing(0.375),
  },
}));

export { useStyles };
