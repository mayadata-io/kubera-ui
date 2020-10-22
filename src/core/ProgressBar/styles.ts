import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  color?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: StyleProps) => ({
    width: '12.125rem',
    borderRadius: '0.125rem',
    background: theme.palette.disabledBackground,
    '& .MuiLinearProgress-bar': {
      backgroundColor: props.color,
    },
  }),
  label: {
    fontSize: '0.75rem',
    marginBottom: theme.spacing(1.625),
    color: theme.palette.text.primary,
  },
}));
export { useStyles };
