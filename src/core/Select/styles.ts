import { makeStyles } from '@material-ui/core';

interface StyleProps {
  width?: number;
}

const useStyles = makeStyles((theme) => ({
  formControl: (props: StyleProps) => ({
    margin: theme.spacing(1),
    minWidth: 120,
    textAlign: 'left',
    width: props.width ? props.width : '100%',
    '& .MuiFormLabel-root': {
      paddingLeft: theme.spacing(0),
      paddingTop: theme.spacing(1.25),
      color: theme.palette.border.main,
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      paddingTop: `${theme.spacing(0)} !important`,
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.border.main,
    },
    '& svg': {
      fill: theme.palette.text.hint,
    },
    '& .MuiInputBase-root': {
      height: '4.875rem',
    },
  }),
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
