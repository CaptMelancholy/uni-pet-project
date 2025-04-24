import { useEffect } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import API from '../API/api';
import axios from 'axios';
import DefaultRoutes from '../Routes/Routes';
import User from '../components/User/User';
import Template from '../components/Template/Template';

export default function UserPage() {
  const { username } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    API.get(`check/${username?.toString()}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
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
      });
  }, []);
  return (
    <Template title={`This is user @${username}`}>
      <User username={username!} />
    </Template>
  );
}
