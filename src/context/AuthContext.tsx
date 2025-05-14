import { createContext, ReactNode, useEffect, useState } from 'react';
import API from '../API/api';

export interface AuthContextType {
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
  authName: string | null;
  setAuthName: (auth: string | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
  authName: null,
  setAuthName: () => {},
});

interface IProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [authName, setAuthName] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await API.get('auth/check');
        setAuthName(response.data.username);
        setIsAuth(true);
      } catch (error) {
        console.error(error);
        setAuthName(null);
        setIsAuth(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, authName, setAuthName }}>
      {children}
    </AuthContext.Provider>
  );
};
