import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: () => ({
    height: '80%',
    width: '70%',
    margin: '2rem auto',
    background: theme.palette.background.paper,
    borderRadius: 3,
    textAlign: 'center',
    outline: 'none',
    overflowX: 'hidden',
    overflowY: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  modalContainerClose: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(4),
  },

  closeButton: () => ({
    fontSize: '1rem',
    fontWeight: 1000,
    display: 'inline-block',
    padding: theme.spacing(0.375, 1.5),
    minHeight: 0,
    minWidth: 0,
    borderRadius: 3,
    color: theme.palette.status.pending.text,
    border: '1px solid',
    borderColor: theme.palette.border.main,
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  }),
}));

export default useStyles;
