import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  styledRadio: {
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
  },

  RadioLabel: {
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
