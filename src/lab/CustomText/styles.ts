import { makeStyles, Theme } from '@material-ui/core';
interface StyleProps {
  fullWidth?: boolean;
  multiline?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    width: (props: StyleProps) => (props.fullWidth ? '100%' : '25rem'),
    maxHeight: (props: StyleProps) => (props.multiline ? 'none' : '2.2rem'),
    paddingLeft: '0.89rem',
    paddingTop: '1.15rem',
    color: theme.palette.text.primary,
    font: 'inherit 0.8rem 400',
    lineHeight: '1.1876em',
    whiteSpace: (props: StyleProps) =>
      props.multiline ? 'break-spaces' : 'nowrap',
    overflowWrap: (props: StyleProps) =>
      props.multiline ? 'break-word' : 'normal',
    overflow: 'hidden',
  },
  btn: {
    '& .MuiButtonBase-root': {
      alignItems: 'top',
    },
    '& .MuiIconButton-root': {
      padding: '1rem 1rem ',
      color: theme.palette.text.primary,
    },
  },
}));

export { useStyles };
