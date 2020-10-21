import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: '10.4375rem',
    width: 'auto',
    height: 'auto',
    display: 'inline-block',
    position: 'relative',
  },
  customDropdown: {
    '& div': {
      top: '6rem !important',
    },
    '& ul': {
      backgroundColor: theme.palette.cards.background,
      fontSize: '0.75rem',
      width: '100%',
      height: '100%',
      boxShadow: '0px 5px 9px rgba(0, 0, 0, 0.1)',
    },
    '& ul>li': {
      fontWeight: 500,
      padding: theme.spacing(1.25, 9.25, 1.25, 2.5),
      color: theme.palette.text.primary,
      '&:focus': {
        backgroundColor: theme.palette.cards.highlight,
        color: theme.palette.text.secondary,
      },
    },
  },
  triangleUp: {
    zIndex: 9999,
    width: '1.525rem',
    height: '1.525rem',
    background: theme.palette.cards.background,
    borderBottomLeftRadius: '4.8125rem',
    borderBottomRightRadius: '3.125rem',
    borderTopLeftRadius: '3.125rem',
    borderTopRightRadius: '21.75rem',
    transform: 'translateY(-0.62rem) rotate(135deg)',
    position: 'absolute',
    right: '1rem',
  },
  show: {
    display: 'block',
    transition:
      'opacity 257ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 171ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  hide: {
    display: 'none',
  },
}));

export { useStyles };
