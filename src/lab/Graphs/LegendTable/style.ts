import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  width?: number;
  height?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: StyleProps) => ({
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
  tableRow: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '0px',
    margin: 'none',
    width: '100%',
  },
  tableCell: {
    display: 'flex',
    border: '0px',
    margin: 'none',
    alignContent: 'flex-start',
  },

  tableHeading: {
    display: 'flex',
    border: '0px',
    margin: 'none',
    alignContent: 'flex-start',
    wordWrap: 'break-word',
    whiteSpace: 'initial',
    color: theme.graph.dashboard.lightBlue,
    width: '4rem',
    '&:first-child': {
      width: '14rem',
    },
  },
  tableLabel: {
    wordWrap: 'break-word',
    whiteSpace: 'initial',
    width: '14rem',
    alignContent: 'flex-start',
    color: theme.palette.text.primary,
  },
  tableData: {
    wordWrap: 'break-word',
    whiteSpace: 'initial',
    width: '4rem',
    alignContent: 'flex-start',
    color: theme.palette.text.primary,
    '& span': {
      alignContent: 'flex-start',
    },
  },
}));

export { useStyles };
