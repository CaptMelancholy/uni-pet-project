import * as S from './User.styles';
import UserAvatar from './UserAvatar/UserAvatar';
import UserProfile from './UserProfile/UserProfile';

interface IProps {
  username: string;
}

export default function User({ username }: IProps) {
  return (
    <S.AccountContainer>
      <UserAvatar username={username} />
      <UserProfile username={username} />
    </S.AccountContainer>
  );
}
