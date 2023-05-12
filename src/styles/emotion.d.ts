import '@emotion/react';

declare module '@emotion/react' {
  export interface DefaultTheme<T> {
    colors: {
      [name: T]: T;
    };
    shadows: {
      [name: T]: T;
    };
  }
}

declare module '@emotion/react' {
  export interface Theme<T> {
    colors: {
      [name: string]: T;
    };
    shadows: {
      [name: T]: T;
    };
  }
}
