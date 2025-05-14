import { useEffect, useState } from 'react';
import API from '../../../API/api';
import * as S from './UserAvatar.styles';

interface IProps {
  username: string;
}

const DEFAULT_AVATAR = '/default.jpg';

export default function UserAvatar({ username }: IProps) {
  const [avatarUrl, setAvatarUrl] = useState<string>(DEFAULT_AVATAR);
  useEffect(() => {
    API.get(`/profile/users/avatar/${username}`, { responseType: 'blob' })
      .then((res) => {
        const url = URL.createObjectURL(res.data);
        setAvatarUrl(url);
      })
      .catch(() => {
        setAvatarUrl(DEFAULT_AVATAR);
      });
  }, [username]);
  return (
    <S.Wrapper>
      <S.AvatarContainer>
        <S.Avatar
          src={avatarUrl}
          alt='Avatar'
        />
      </S.AvatarContainer>
    </S.Wrapper>
  );
}
