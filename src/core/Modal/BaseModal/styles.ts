import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  modalContainer: (props: any) => ({
    height: '85%',
    width: '70%',
    padding: '1rem',
    margin: '2rem auto',
    background: theme.palette.background.paper,
    borderRadius: 3,
    textAlign: props.textAlign ? props.textAlign : 'center',
    outline: 'none',
    overflowX: 'hidden',
    overflowY: 'auto',
  }),

  modalContainerClose: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(0),
  },

  closeButton: (props: any) => ({
    fontSize: '1rem',
    fontWeight: 1000,
    display: 'inline-block',
    padding: `${theme.spacing(0.375)} ${theme.spacing(1.5)}`,
    minHeight: 0,
    minWidth: 0,
    borderRadius: 3,
    color: theme.palette.status.pending.text,
    border: '1px solid',
    borderColor: theme.palette.border.main,
    marginTop: theme.spacing(2),
  }),

  BaseModalStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.disabledBackground,
  },
}));

export default useStyles;
