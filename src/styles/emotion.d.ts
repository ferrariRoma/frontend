import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      bgColor: string;
      accentColor: string;
      fontColor: string;
      shadowColor: string;
    };
  }
}
