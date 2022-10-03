import "@emotion/react";

declare module "@emotion/react" {
  export interface DefaultTheme {
    colors: {
      bgColor: string;
      accentColor: string;
      fontColor: string;
    };
  }
}
