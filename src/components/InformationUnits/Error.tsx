import * as S from './InformationUnits.styles';
import * as C from '../../styles/components';
import { useTheme } from 'styled-components';

interface IProps {
  message?: string;
}

export default function Error({ message } : IProps) {
  const theme = useTheme();
  const defaultAnswer : string = 'Something went wrong. We will try to fix it soon';
  return (
    <S.Wrapper>
      <C.Text
        $size={70}
        $weight={700}
        $color={theme.colors.red}
      >
        {message ? message : defaultAnswer}
      </C.Text>
    </S.Wrapper>
  );
}
