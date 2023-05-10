import { useEffect, useState } from 'react';

const useCheckLogin = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('extremeToken');
    if (accessToken) {
      setIsLogin(true);
    }
  }, []);

  return [isLogin, setIsLogin];
};

export default useCheckLogin;
