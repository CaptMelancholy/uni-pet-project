import { useLocation, useParams } from 'react-router-dom';
import Error from '../components/InformationUnits/Error';
import Template from '../components/Template/Template';

export default function ErrorPage() {
  const { code } = useParams();
  const { state } = useLocation();
  return (
    <Template title={`ERROR CODE: ${code}`}>
      <Error message={state.message} />
    </Template>
  );
}
