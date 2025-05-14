import AuthTemplate from '../components/AuthorizationTemplate/AuthTemplate';
import { AuthRoute } from '../components/Routes/AuthRoute';
import Template from '../components/Template/Template';

export default function JoinPage() {
  return (
    <AuthRoute>
      <Template title='JOIN or YOU ALREADY?'>
        <AuthTemplate />
      </Template>
    </AuthRoute>
  );
}
