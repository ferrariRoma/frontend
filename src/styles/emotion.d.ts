import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      bgColor: string;
      titleColor: string;
      subFontColor: string;
      accentColor: string;
      whiteWine: string;
      white: string;
      lightGrey: string;
      bgYellow: string;
      lightGrey_2: string;
    };
    shadows: {
      basic_shadow: string;
      button_shadow: string;
      emboss_shadow: string;
    };
  }
}
