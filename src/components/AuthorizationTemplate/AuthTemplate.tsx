import { useState } from 'react';
import * as S from './AuthTemplate.styles';
import TabButtons from '../Tabs/TabButtons/TabButtons';
import TabContent from '../Tabs/TabContent/TabContent';
import SingIn from '../SignIn/SingIn';
import SingUp from '../SignUp/SingUp';

export default function AuthTemplate() {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <S.Wrapper>
      <S.Container>
        <TabButtons
          name={['SIGN IN', 'SIGN UP']}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabContent activeTab={activeTab}>
          <SingIn />
          <SingUp />
        </TabContent>
      </S.Container>
    </S.Wrapper>
  );
}