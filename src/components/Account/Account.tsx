import { useState } from 'react';
import * as S from './Account.styles';
import AccountAvatar from './AccountComponents/AccountAvatar/AccountAvatar';
import TabContent from '../Tabs/TabContent/TabContent';
import TabButtons from '../Tabs/TabButtons/TabButtons';
import AccountProfile from './AccountComponents/AccountProfile/AccountProfile';
import AccountPassword from './AccountComponents/AccountPassword/AccountPassword';

export default function Account() {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <S.AccountContainer>
      <AccountAvatar />
      <TabButtons
        name={['PROFILE', 'SECURITY']}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent activeTab={activeTab}>
        <AccountProfile />
        <AccountPassword />
      </TabContent>
    </S.AccountContainer>
  );
}
