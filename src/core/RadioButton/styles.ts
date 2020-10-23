import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  styledRadio: {
    '&.MuiRadio-colorSecondary&.Mui-disabled': {
      color: theme.palette.disabledBackground,
    },
    '&.MuiRadio-colorPrimary&.Mui-disabled': {
      color: theme.palette.disabledBackground,
    },
    color: theme.palette.border.main,
    '&.PrivateRadioButtonIcon-checked-13': {
      color: theme.palette.highlight,
    },
  },

  diffStyle: {
    '&.MuiRadio-colorPrimary&.Mui-disabled': {
      color: theme.palette.disabledBackground,
    },
    color: theme.palette.border.main,
    '&.PrivateRadioButtonIcon-checked-13': {
      color: theme.palette.disabledBackground,
    },
    '&.MuiFormControlLabel-label&.Mui-disabled': {
      color: theme.palette.text.disabled,
    },
    '&.MuiRadio-colorSecondary&.Mui-disabled': {
      color: theme.palette.disabledBackground,
    },
  },

  root: {
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
