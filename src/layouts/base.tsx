import { ReactNode } from 'react';

import * as S from './styles';
import Header from '../components/Header/Header';
import ScreenBlock from '../components/ScreenBlock/ScreenBlock';

interface IProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: IProps) {
  return (
    <>
      <ScreenBlock />
      <Header />
      <S.Layout>{children}</S.Layout>
    </>
  );
}
