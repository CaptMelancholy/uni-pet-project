import { ReactNode } from 'react';
import * as S from './TabContent.styles';

interface IProps {
  children: ReactNode[];
  activeTab: number;
}

export default function TabContent({
  children,
  activeTab,
}: IProps) {
  return (
    <S.ContentWrapper>
      {children.map((el, index) => (
        <S.Content key={index} className={activeTab === index ? 'active' : ''}>
          {el}
        </S.Content>
      ))}
    </S.ContentWrapper>
  );
}
