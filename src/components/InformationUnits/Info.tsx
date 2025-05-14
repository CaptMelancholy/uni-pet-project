import { useTheme } from 'styled-components';
import * as C from '../../styles/components';
import * as S from './InformationUnits.styles';

export default function Info() {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <C.Text
        $size={70}
        $weight={700}
        $color={theme.colors.green}
      >
        You successfully join us. Please, come back to join page and sign in!
      </C.Text>
    </S.Wrapper>
  );
}
