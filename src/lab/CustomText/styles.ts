import { makeStyles, Theme } from '@material-ui/core';
interface StyleProps {
  fullWidth?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    width: (props: StyleProps) => (props.fullWidth ? '100%' : '25rem'),
    paddingLeft: '0.89rem',
    paddingTop: '1.15rem',
    color: theme.palette.text.primary,
    font: 'inherit 0.8rem 400',
    lineHeight: '1.1876em',
    whiteSpace: 'break-spaces',
    overflowWrap: 'break-word',
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
