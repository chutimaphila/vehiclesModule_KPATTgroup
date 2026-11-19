/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import _ from 'lodash';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import typography from './typography';
import { softShadows, strongShadows } from './shadows';
import { THEMES } from '../constants';

const baseConfig = {
  direction: 'ltr',
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    }
  }
};

const themeConfigs = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: '#546E7A'
          }
        }
      }
    },
    palette: {
      type: 'light',
      action: {
        active: '#546E7A'
      },
      background: {
        default: '#F4F6F8',
        dark: '#EBF0F5',
        paper: '#FFFFFF'
      },
      primary: {
        main: '#2B799B',
        light: '#43B0C7',
        dark: '#1E5670',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#43B0C7',
        light: '#78CBE0',
        dark: '#2D8A9E',
        contrastText: '#FFFFFF'
      },
      text: {
        primary: '#1D2433',
        secondary: '#546E7A'
      }
    },
    shadows: softShadows
  },
  {
    name: THEMES.ONE_DARK,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: '#9FB3C8'
          }
        }
      }
    },
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(67, 176, 199, 0.08)',
        selected: 'rgba(67, 176, 199, 0.14)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(67, 176, 199, 0.16)'
      },
      background: {
        default: '#141625',
        dark: '#0E101C',
        paper: '#1E2136'
      },
      primary: {
        main: '#43B0C7',
        light: '#7AD0E2',
        dark: '#2B799B',
        contrastText: '#141625'
      },
      secondary: {
        main: '#64C5DB',
        light: '#9BE0F0',
        dark: '#376E8C',
        contrastText: '#141625'
      },
      text: {
        primary: '#F0F4F8',
        secondary: '#9FB3C8'
      }
    },
    shadows: strongShadows
  },
  {
    name: THEMES.UNICORN,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#2a2d3d',
        dark: '#222431',
        paper: '#2a2d3d'
      },
      primary: {
        main: '#a67dff'
      },
      secondary: {
        main: '#a67dff'
      },
      text: {
        primary: '#f6f5f8',
        secondary: '#9699a4'
      }
    },
    shadows: strongShadows
  }
];

export function createTheme(settings = {}) {
  let themeConfig = themeConfigs.find(theme => theme.name === settings.theme);

  if (!themeConfig) {
    console.warn(new Error(`The theme ${settings.theme} is not valid`));
    [themeConfig] = themeConfigs;
  }

  let theme = createMuiTheme(
    _.merge({}, baseConfig, themeConfig, { direction: settings.direction })
  );

  if (settings.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
}
