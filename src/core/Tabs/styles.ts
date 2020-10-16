import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  panel: {
    width: '67.125rem',
    boxShadow: 'none',
    background: 'transparent',
    borderBottom: `0.0625rem solid ${theme.palette.border.main}`,
  },
  indicator: {
    background: theme.palette.highlight,
    boxShadow: '0px 4px 4px',
  },
}));

export default useStyles;
