import { red } from '@mui/material/colors';
import { PaletteColorOptions, createTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomPalette {
    tertiary: Palette['primary'];
    ready: PaletteColorOptions;
    danger: PaletteColorOptions;
    default: PaletteColorOptions;
  }
  interface Palette extends CustomPalette { }
  interface PaletteOptions extends CustomPalette { }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    ready: true;
    danger: true;
    default: true;
  }
}

declare module '@mui/material/Chip/Chip' {
  interface ChipPropsColorOverrides {
    tertiary: true;
    ready: true;
    danger: true;
    default: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;

const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });

// A custom theme for this app
export const greenTheme: Theme = createTheme({
  // typography: {
  //   fontFamily: [
  //     'VT323',
  //     'Arial',
  //     'sans-serif',
  //   ].join(','),
  // },
  palette: {
    primary: {
      main: '#1F3B45',
      light: '#4b626a',
      dark: '#152930',
    },
    secondary: {
      main: '#193540',
      light: '#475d66',
      dark: '#11252c',
    },
    tertiary: {
      main: "#64a7be",
      light: '#83b8cb',
      dark: '#467485',
      contrastText: '#fff'
    },
    warning: {
      main: '#FFC107'
    },
    ready: createColor("#39a935"),
    danger: createColor("#DC3545"),
    default: createColor("#F8F9FA"),
    error: {
      main: red.A400,
    },
    text: {
      primary: '#FFFFFF',
    }
  },
});
