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
  fontSize: {
    h1: { size: '6.198125rem', weight: 800 },
    h2: { size: '3.099375rem', weight: 600 },
    h3: { size: '2.324375rem', weight: 400 },
    h3_bold: { size: '2.324375rem', weight: 700 },
    h4: { size: '1.936875rem', weight: 400 },
    h5: { size: '1.549375rem', weight: 800 },
    body: { size: '1.743125rem', weight: 400 },
    body_bold: { size: '1.743125rem', weight: 700 },
    sub: { size: '1.549375rem', weight: 400 },
    tag: { size: '1.161875rem', weight: 400 },
    tooltip: { size: '1.25rem', weight: 300 },
    switch: { size: '1.161875rem', weight: 700 },
  },
} as const;

// #e55039
