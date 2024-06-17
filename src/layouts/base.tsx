import { ReactNode } from 'react';

import * as S from './styles';

interface IProps {
  children: ReactNode;
}

export default function BaseLayout({ children } : IProps) {
  return (
    <S.Layout>
      <S.Container>{ children }</S.Container>
    </S.Layout>
  );
}
