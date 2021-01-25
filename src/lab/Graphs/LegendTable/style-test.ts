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

  tableFont: {
    fontFamily: 'Ubuntu',
    fontSize: '0.8rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '16px',
    borderBottom: 'none',
    letterSpacing: '0em',
    paddingLeft: '0.5em',
    textAlign: 'left',
    color: theme.palette.text.primary,
    minWidth: '1rem',
  },

  tableHeading: {
    paddingLeft: '1.5em',
    fontSize: '0.9rem',
    color: theme.graph.legendTableHeading,
    whiteSpace: 'nowrap',
    fontWeight: 500,
  },

  hr: {
    position: 'relative',
    width: '12px',
    height: '2px',
  },

  tableRow: {
    justifyContent: 'flex-end',
    '& td': {
      borderBottom: 'none',
    },
  },
  tableDataRow: {
    float: 'left',
    display: 'flex',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  tableCell: {
    padding: '1rem',
    maxWidth: '30%',
    minWidth: '1rem',
  },
}));

export { useStyles };
