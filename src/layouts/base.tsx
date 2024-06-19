import { ReactNode } from 'react';

import * as S from './styles';
import Header from '../components/Header/Header';

interface IProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: IProps) {
  return (
    <>
      <Header />
      <S.Layout>{children}</S.Layout>
    </>
  );
}
