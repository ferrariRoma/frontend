import Welcome from './components/Welcome';
import { useCheckLogin } from './hooks';
import { usersApi } from './shared/apis';

function App() {
  const handleLoginBtn = () => {
    return usersApi.login();
  };

  const [isLogin, setIsLogin] = useCheckLogin();

  return (
    <Welcome>
      <Welcome.TypoAtom fontSize="2rem"></Welcome.TypoAtom>
      <Welcome.GoogleLoginAtom
        handleLoginBtn={handleLoginBtn}
      ></Welcome.GoogleLoginAtom>
    </Welcome>
  );
}

export default App;
