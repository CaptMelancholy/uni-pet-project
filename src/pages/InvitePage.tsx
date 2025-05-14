import axios from 'axios';
import { useEffect } from 'react';
import { generatePath, Navigate, useNavigate, useParams } from 'react-router-dom';
import API from '../API/api';
import DefaultRoutes from '../Routes/Routes';
import { PrivateRoute } from '../components/Routes/PrivateRoute';

export default function InvitePage() {
  const { hash } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const handleInvite = async () => {
      try {
        await API.post(`link/join/${hash}`);
        navigate(DefaultRoutes.default);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.status);
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
    handleInvite();
  }, []);
  return (
    <PrivateRoute>
        <Navigate to={DefaultRoutes.default} />
    </PrivateRoute>
  );
}
