import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& span': {
      borderRadius: '0.1875rem',
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem',
    borderWidth: '0.03125rem',
    borderStyle: 'solid',
    borderColor: theme.palette.border.main,
    'input:hover ~ &': {
      borderColor: theme.palette.secondary.main,
    },
    'input:disabled ~ &': {
      borderColor: theme.palette.disabledBackground,
    },
  },
  checkedIcon: {
    width: '1.5rem',
    height: '1.5rem',
    borderWidth: '0.03125rem',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    'input:disabled ~ &': {
      borderColor: theme.palette.disabledBackground,
      '&:before': {
        display: 'block',
        width: '1.375rem',
        height: '1.375rem',
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23" +
          theme.palette.disabledBackground.split('#')[1] +
          '\'/%3E%3C/svg%3E")',
        content: '""',
      },
    },
    '&:before': {
      display: 'block',
      width: '1.375rem',
      height: '1.375rem',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23" +
        theme.palette.secondary.main.split('#')[1] +
        '\'/%3E%3C/svg%3E")',
      content: '""',
    },
  },
}));

export { useStyles };
