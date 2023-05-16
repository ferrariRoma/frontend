import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/Global';
import { colorTheme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// TODO : Suspense 사용할 수 없을까?
root.render(
  <ThemeProvider theme={colorTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
);

reportWebVitals();
