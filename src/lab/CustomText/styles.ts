import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  width: string;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.paper,
    //label start
    '& label': {
      color: theme.palette.text.hint,
      paddingLeft: '0.7rem',
    },
    '& .MuiFormLabel-root.Mui-disabled ': {
      color: theme.palette.text.hint,
      paddingBottom: '0.2rem',
    },
    // label end
    //test

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.dark,
        borderWidth: 2,
        padding: `0.5rem`,
        margin: '0.5rem',
        marginTop: '0.2rem',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.dark,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.dark,
      },
      '&.Mui-active fieldset': {
        borderColor: theme.palette.primary.dark,
      },
    },
    //end test

    '& .MuiInputBase-input ': {
      padding: `0.5rem`,
      margin: `0`,
    },
    '& .MuiInputBase-root ': {
      padding: `0.5rem`,
      marginTop: '0.1rem',
    },
    '& .MuiOutlinedInput-root ': {
      padding: `0.5rem`,
      marginTop: '0.1rem',
    },
    // inputBase bottomLine
    '& .MuiInput-underline:before': {
      borderWidth: '0rem',
    },
    //helper message start
    '& .MuiFormHelperText-root': {
      color: theme.palette.text.hint,
      padding: 0,
      margin: 0,
      marginLeft: '0.5rem',
      marginTop: '-0.2rem',
      paddingLeft: '0.5rem',
      transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1) 0s',
    },
    '& .MuiFormHelperText-root.Mui-disabled': {
      marginTop: '-1rem',
    },
    //helper message end

    // outline box start

    '& input:valid + fieldset': {
      borderColor: theme.palette.primary.dark,
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: theme.palette.border.error,
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '& input:valid:hover + fieldset': {
      borderColor: theme.palette.primary.dark,
    },

    // outline box end
  },
  editBtn: {
    color: theme.palette.text.primary,
  },
  saveBtn: {
    color: theme.palette.text.primary,
  },
  inputText: {
    width: (props: StyleProps) => props.width,
  },
}));

export { useStyles };
