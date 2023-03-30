import '@emotion/react';

declare module '@emotion/react' {
  export interface DefaultTheme<T> {
    colors: {
      [name: T]: T;
    };
  }
}
