import Template from '../components/Template/Template';
import Info from '../components/InformationUnits/Info';
import { AuthRoute } from '../components/Routes/AuthRoute';

export default function SuccessPage() {
  return (
    <AuthRoute>
      <Template title='Success!'>
        <Info />
      </Template>
    </AuthRoute>
  );
}
