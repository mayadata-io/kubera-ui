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
    // backgroundColor: 'pink',

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
    padding: theme.spacing(1, 0),
  },

  tableHeading: {
    display: 'flex',
    border: '0px',
    margin: '0',
    justifyContent: 'space-between',
    color: theme.graph.dashboard.lightBlue,
    width: '4rem',
    '&:first-child': {
      width: '14rem',
    },
  },
  tableLabel: {
    width: '14rem',
  },
  tableData: {
    width: '4rem',
    '& span': {
      alignContent: 'flex-start',
    },
  },
  tableFont: {
    wordWrap: 'break-word',
    whiteSpace: 'initial',
    alignContent: 'flex-start',
    color: theme.palette.text.primary,
  },
  hr: {
    position: 'relative',
    width: '10px',
    height: '2px',
    alignSelf: 'baseline',
    marginRight: '0.5em',
    marginTop: '0.5rem',
  },
}));

export { useStyles };
