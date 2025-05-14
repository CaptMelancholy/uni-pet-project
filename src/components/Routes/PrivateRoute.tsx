import { Navigate } from 'react-router-dom';
import DefaultRoutes from '../../Routes/Routes';
import { useAuth } from '../../context/AuthHooks';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

export const PrivateRoute = ({ children } : IProps) => {
    const { isAuth } = useAuth();
    return isAuth ? children : <Navigate to={DefaultRoutes.auth} />;
};
