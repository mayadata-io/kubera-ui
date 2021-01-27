import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  rectBase: {
    fill: theme.palette.background.paper,
  },
  radicalArc: {
    opacity: 0.9,
    transform: 'scale(1)',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.02)',
    },
  },
  radialFont: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontFamily: 'Ubuntu',
  },
  centerDataValue: {
    fontSize: '2rem',
    fontWeight: 500,
    fill: theme.palette.text.primary,
  },
  centerHeading: {
    fontSize: '1.2rem',
    fontWeight: 300,
    fill: theme.palette.text.hint,
  },
}));
export { useStyles };
