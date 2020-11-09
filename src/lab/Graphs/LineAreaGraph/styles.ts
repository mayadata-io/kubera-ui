import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  color?: string;
  width?: number;
  height?: number;
  align?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  rectBase: {
    fill: 'rgba(10, 24, 24, 0.9)',
  },
  table: (props: StyleProps) => ({
    display: 'flex',
    width: props.width,
    height: props.height,
    backgroundColor: 'rgba(10, 24, 24, 0.9)',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(10, 24, 24, 0.9)',
      borderRadius: '5px',
    },

    '&::-webkit-scrollbar-corner': {
      backgroundColor: 'rgba(10, 24, 24, 0.9)',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(82,249,149,0.6)',
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'rgba(82,249,149,0.9)',
    },
  }),
  tableCell: {
    borderBottom: 'none',
    maxWidth: '30%',
    minWidth: '10%',
  },
  tableDataRow: {
    float: 'left',
    display: 'flex',
    alignItems: 'flex-start',
  },
  tableHeading: {
    borderBottom: 'none',
    fontSize: '0.9rem',
    color: '#0098DD',
    whiteSpace: 'nowrap',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: '0em',
    textAlign: 'left',
    paddingLeft: '1.5em',
  },
  tableData: {
    fontFamily: 'Ubuntu',
    fontSize: '0.8rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '16px',

    letterSpacing: '0em',
    textAlign: 'left',
    paddingLeft: '0.5em',
  },

  hr: {
    width: '12px',
    height: '2px',
  },
  grid: {
    stroke: '#777777',
    strokeOpacity: 0.5,
  },
  tooltipLine: {
    stroke: '#08BBD7',
    strokeWidth: 2,
    pointerEvents: 'none',
    strokeDasharray: '5,2',
  },
  tooltipData: {
    float: 'left',
    display: 'flex',
    alignItems: 'flex-start',
  },
}));
export { useStyles };
