import { createTheme } from './base';

const kuberaCoreTheme = createTheme({
  palette: {
    primary: {
      main: '#C34FC5',
      light: '#266C90',
      dark: '#825398',
    },
    secondary: {
      main: '#30A7C3',
      light: '#30A7C3',
      dark: '#266C90',
    },
    success: {
      main: '#109B67',
      light: '#109B674D',
      dark: '#128359',
    },
    error: {
      main: '#CA2C2C',
      light: '#CA2C2C33',
      dark: '#A62F28',
    },
    warning: {
      main: '#F6B92B',
      light: '#F6B92B33',
      dark: '#402C01',
    },
    background: {
      default:
        'linear-gradient(67.59deg, #191B42 -0.7%, #191B42 -0.69%, #191B42 25.35%, #0B3147 98.91%)',
      paper: '#1C2126',
    },
    sidebarMenu: '#1401184D',
    loginBackground: '#FFFFFF',
    disabledBackground: '#777777',
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      disabled: '#B9B9B9',
      hint: '#B9B9B9',
    },
    highlight: '#C34FC5',
    horizontalStepper: {
      completed: '#17DB92',
      active: '#EAD7A2',
      pending: '#777777',
    },
    border: {
      main: '#777777',
      success: '#109B67',
      error: '#CA2C2C',
    },
    progressBarGradient:
      'linear-gradient(90.43deg, #52F995 0.35%, #F6B92B 99.62%, #F6B92B 99.63%)',
    status: {
      running: {
        text: '#DBA017',
        background: '#DBA01780',
      },
      completed: {
        text: '#17DB92',
        background: '#17DB9233',
      },
      pending: {
        text: '#B9B9B9',
        background: '#B9B9B980',
      },
      failed: {
        text: '#CA2C2C',
        background: '#CA2C2C80',
      },
    },
    cards: {
      background: '#2B333B',
      highlight: '#C34FC5',
    },
    modal: {
      background: '#1C2126',
      backdrop: '#071F3599',
    },
  },

  // Kubera Core Additional Theme Options

  kuberaCoreCards: {
    kuberaChaos: {
      card: 'linear-gradient(255.08deg, #0D654B 7.37%, #0B4F3A 100%)',
      license: {
        selection: '#0000004D',
        header: 'linear-gradient(255.08deg, #0E694E 7.37%, #094533 100%)',
        body: 'linear-gradient(255.08deg, #074633 7.37%, #04281E 100%)',
      },
    },
    kuberaPropel: {
      card: 'linear-gradient(63.18deg, #2C354D 5.01%, #323E5B 102.43%)',
      license: {
        selection: '#0000004D',
        header: 'linear-gradient(63.18deg, #262F44 5.01%, #323E5B 102.43%)',
        body: 'linear-gradient(63.18deg, #1C2232 5.01%, #252E46 102.43%)',
      },
    },
  },

  // MUI Overrides

  overrides: {
    MuiTab: {
      root: {
        '&$selected': {
          color: '#C34FC5',
        },
      },
    },
    MuiFormLabel: {
      root: {
        paddingLeft: 20,
        '&[data-shrink="true"]': {
          color: '#C34FC5',
        },
      },
      asterisk: {
        color: 'transparent',
      },
    },
  },
});

export { kuberaCoreTheme };
