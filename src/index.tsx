import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/Global";
import { lightTheme, darkTheme } from "./styles/theme";

function queryErrorHandler<T>(error: T) {
  console.log("⛔️ error connecting to server ⛔️");
  return console.log(error);
}
// BUG : mutations 시 suspense는 defaultOptions로 설정이 안될까? 거정님은 아나바다에서 설정을 해두었는데 여기서는 type error가 발생함. 안해도 되는 것일까?..
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true, // React.Suspense를 쓰기 위한 옵션
      onError: queryErrorHandler, // error 전체 핸들링
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// TODO : Suspense 사용할 수 없을까?
// TODO : LightTheme, DarkTheme를 contextAPI랑 useReducer를 통해서 관리해보자
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);

reportWebVitals();
