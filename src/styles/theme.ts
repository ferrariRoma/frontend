import { Theme } from '@emotion/react';

export const designTheme: Theme = {
  colors: {
    bgColor: '#fad390',
    titleColor: '#4B86FA',
    subFontColor: '#222F3E',
    accentColor: '#ee5253',
    whiteWine: 'rgba(108, 35, 35, 0.14)',
    white: '#FCFCFC',
    lightGrey: '#DFE8F1',
    bgYellow: '#E8EAA8',
    lightGrey_2: '#ECECEC',
  },
  shadows: {
    basic_shadow: '0px 4px 62px rgba(0, 0, 0, 0.05)',
    button_shadow: '0px 9px 23px rgba(0, 0, 0, 0.1)',
    emboss_shadow:
      'inset 0px -10px 20px rgba(41, 32, 95, 0.33), inset 0px 10px 30px rgba(255, 255, 255, 0.44)',
  },
} as const;

// #e55039
