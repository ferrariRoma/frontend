import { RankingAndRecords } from './components';
import { useEffect } from 'react';
import Welcome from './components/Welcome';
import { setToken } from './hooks/useCheckLogin';

function App() {
  useEffect(() => {
    const pathname = window.location.pathname;
    if (Object.is(pathname, '/oauth')) {
      const query = window.location.search;
      const clientURL = new URLSearchParams(query);

      const userinfo = {
        email: clientURL.get('email'),
        username: clientURL.get('username'),
        extremeToken: clientURL.get('token'),
      };

      if (userinfo.extremeToken && userinfo.email) {
        setToken(userinfo.extremeToken, userinfo.email);
        history.replaceState('', '', process.env.REACT_APP_API_CLIENT_URL);
      }
    }
  }, []);

  return (
    <>
      <Welcome />
      <RankingAndRecords isLogin={true} />
    </>
  );
}

export default App;
