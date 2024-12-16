import { useEffect } from 'react';
import { useAuth } from '../context/AuthHooks';
import { generatePath, Navigate, useNavigate } from 'react-router-dom';
import API from '../API/api';
import axios from 'axios';
import DefaultRoutes from '../Routes/Routes';
import { PrivateRoute } from '../components/Routes/PrivateRoute';

export default function LogoutPage() {
  const { setIsAuth, setAuthName } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogout = async () => {
      try {
        await API.post('logout');
        setIsAuth(false);
        setAuthName(null);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.status);
          const path = generatePath(DefaultRoutes.error, {
            code: error.response?.status,
          });
          navigate(path, {
            state: { message: error.response?.data.error },
          });
        } else {
          console.error(error);
          const path = generatePath(DefaultRoutes.error, { code: error });
          navigate(path);
        }
      }
    };
    handleLogout();
  }, []);
  return (
    <PrivateRoute>
        <Navigate to={DefaultRoutes.auth} />
    </PrivateRoute>
  );
}
