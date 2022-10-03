import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function queryErrorHandler<T>(error: T) {
  console.log("⛔️ error connecting to server ⛔️");
  return console.log(error);
}

// TODO : mutations 시 suspense는 defaultOptions로 설정이 안될까?
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
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
