import { DefaultTheme } from "@emotion/react";

// TODO : light테마에서 fontColor를 이걸로 해도 될까?... 고민해보자!
export const lightTheme: DefaultTheme = {
  colors: {
    bgColor: "#fad390",
    fontColor: "#e55039",
    accentColor: "#ee5253",
  },
};
export const darkTheme: DefaultTheme = {
  colors: {
    bgColor: "#222f3e",
    fontColor: "#c8d6e5",
    accentColor: "#ee5253",
  },
};
