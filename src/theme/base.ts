import { createMuiTheme, ThemeOptions } from '@material-ui/core';

// Agument the Theme interface
declare module '@material-ui/core/styles/createMuiTheme' {
  export interface Theme {
    kuberaPortalCards: {
      kuberaChaos: {
        background: string;
        highlight: string;
      };
      kuberaPropel: {
        background: string;
        highlight: string;
      };
      kuberaPortal: {
        background: string;
        highlight: string;
      };
    };
    graph: {
      dashboard: {
        lightBlue: string;
        lightOrange: string;
      };
      toolTip: string;
      legendTableHeading: string;
      radialChartPassed: string;
      line: {
        violet: string;
        violetLight: string;
        brightPink: string;
        darkPink: string;
        yellow: string;
        darkYellow: string;
        orange: string;
        lightGreen: string;
        lightBlue: string;
        darkBlue: string;
      };
      area: {
        violet: string;
        violetLight: string;
        brightPink: string;
        darkPink: string;
        yellow: string;
        darkYellow: string;
        orange: string;
        lightGreen: string;
        lightBlue: string;
        darkBlue: string;
      };
    };
    kuberaCoreCards: {
      kuberaChaos: {
        background: {
          default: string;
          paper: string;
        };
        button: {
          unconfigured: string;
          configured: string;
        };
        card: string;
        highlight: string;
        license: {
          selection: string;
          header: string;
          body: string;
        };
      };
      kuberaPropel: {
        background: {
          default: string;
          paper: string;
        };
        button: {
          unconfigured: string;
          configured: string;
        };
        card: string;
        highlight: string;
        license: {
          selection: string;
          header: string;
          body: string;
        };
      };
    };
  }
  // allow configuration using `createMuiTheme`
  export interface ThemeOptions {
    kuberaPortalCards?: {
      kuberaChaos: {
        background: string;
        highlight: string;
      };
      kuberaPropel: {
        background: string;
        highlight: string;
      };
      kuberaPortal: {
        background: string;
        highlight: string;
      };
    };
    graph?: {
      dashboard?: {
        lightBlue: string;
        lightOrange: string;
      };
      toolTip?: string;
      legendTableHeading?: string;
      radialChartPassed?: string;
      line?: {
        violet: string;
        violetLight: string;
        brightPink: string;
        darkPink: string;
        yellow: string;
        darkYellow: string;
        orange: string;
        lightGreen: string;
        lightBlue: string;
        darkBlue: string;
      };
      area?: {
        violet: string;
        violetLight: string;
        brightPink: string;
        darkPink: string;
        yellow: string;
        darkYellow: string;
        orange: string;
        lightGreen: string;
        lightBlue: string;
        darkBlue: string;
      };
    };
    kuberaCoreCards?: {
      kuberaChaos?: {
        background: {
          default: string;
          paper: string;
        };
        button: {
          unconfigured: string;
          configured: string;
        };
        card: string;
        highlight: string;
        license: {
          selection: string;
          header: string;
          body: string;
        };
      };
      kuberaPropel?: {
        background: {
          default: string;
          paper: string;
        };
        button: {
          unconfigured: string;
          configured: string;
        };
        card: string;
        highlight: string;
        license: {
          selection: string;
          header: string;
          body: string;
        };
      };
    };
  }
}

// Augument the Palette interface
declare module '@material-ui/core/styles/createPalette' {
  export interface Palette {
    // Base Theme Palette
    sidebarMenu: string;
    loginBackground: string;
    disabledBackground: string;
    highlight: string;
    horizontalStepper: {
      completed: string;
      active: string;
      pending: string;
    };
    border: {
      main: string;
      success: string;
      error: string;
    };
    progressBarGradient: string;
    status: {
      running: {
        text: string;
        background: string;
      };
      completed: {
        text: string;
        background: string;
      };
      pending: {
        text: string;
        background: string;
      };
      failed: {
        text: string;
        background: string;
      };
    };
    cards: {
      header: string;
      background: string;
      highlight: string;
    };
    modal: {
      background: string;
      backdrop: string;
    };
  }
  // allow configuration using `createMuiTheme`
  export interface PaletteOptions {
    // Base Theme Palette options
    sidebarMenu?: string;
    loginBackground?: string;
    disabledBackground?: string;
    highlight?: string;
    horizontalStepper?: {
      completed: string;
      active: string;
      pending: string;
    };
    border?: {
      main: string;
      success: string;
      error: string;
    };
    progressBarGradient?: string;
    status?: {
      running: {
        text: string;
        background: string;
      };
      completed: {
        text: string;
        background: string;
      };
      pending: {
        text: string;
        background: string;
      };
      failed: {
        text: string;
        background: string;
      };
    };
    cards?: {
      header: string;
      background: string;
      highlight: string;
    };
    modal?: {
      background: string;
      backdrop: string;
    };
  }
}

// Function for creating custom themes

function createTheme(themeOptions?: ThemeOptions) {
  return createMuiTheme({
    breakpoints: {
      keys: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "xxl",
      ],
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1440,
        xxl: 1920,
      },
    },
    typography: {
      fontSize: 12,
      fontFamily: 'Ubuntu',
    },
    ...themeOptions,
  });
}

export { createTheme };
