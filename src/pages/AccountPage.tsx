import { PrivateRoute } from '../components/Routes/PrivateRoute';
import Account from '../components/Account/Account';
import Template from '../components/Template/Template';
import { useAuth } from '../context/AuthHooks';

export default function AccountPage() {
  const {authName} = useAuth();
    return (
    <PrivateRoute>
      <Template title={authName ? `Account: @${authName}` : 'Error'}>
        <Account />
      </Template>
    </PrivateRoute>
  );
}
