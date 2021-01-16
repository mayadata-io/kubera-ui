import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  color?: string;
  width?: number;
  height?: number;
  align?: string;
  backgroundTransparent?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  rectBase: {
    fill: theme.palette.background.paper,
  },
  rectBaseTransparent: {
    fill: 'transparent',
  },
  table: (props: StyleProps) => ({
    display: 'flex',
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundTransparent
      ? 'transparent'
      : theme.palette.background.paper,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '5px',
    },

    '&::-webkit-scrollbar-corner': {
      backgroundColor: theme.palette.background.paper,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  }),

  tableDataRow: {
    float: 'left',
    display: 'flex',
    alignItems: 'flex-start',
  },
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
  },

  tableHeading: {
    paddingLeft: '1.5em',
    fontSize: '0.9rem',
    color: theme.graph.dashboard.lightBlue,
    whiteSpace: 'nowrap',
    fontWeight: 500,
  },

  hr: {
    width: '12px',
    height: '2px',
  },
  grid: {
    stroke: theme.palette.disabledBackground,
    strokeOpacity: 0.2,
  },
  tooltipLine: {
    stroke: theme.graph.dashboard.lightBlue,
    strokeWidth: 2,
    pointerEvents: 'none',
    strokeDasharray: '5,2',
  },
  tooltipData: {
    float: 'left',
    display: 'flex',
    alignItems: 'flex-start',
  },
  tableRow: {
    '& td': {
      borderBottom: 'none !important',
    },
  },
  tableCell: {
    maxWidth: '30%',
    minWidth: '10%',
  },
}));
export { useStyles };
