import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  width?: number;
  height?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  table: (props: StyleProps) => ({
    display: 'flex',
    width: props.width,
    height: props.height,
    backgroundColor: theme.palette.background.paper,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '3px',
      height: '3px',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '3px',
    },

    '&::-webkit-scrollbar-corner': {
      backgroundColor: theme.palette.background.paper,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.highlight,
      borderRadius: '3px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: theme.palette.highlight,
    },
  }),
}));

export { useStyles };
