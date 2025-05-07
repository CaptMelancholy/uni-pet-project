import * as S from './ModalCardUser.styles';
import * as C from '../../../../../styles/components';
import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';
import API from '../../../../../API/api';

export interface IUserCard {
  id: number;
  username: string;
}

interface IProps {
  user: IUserCard;
}

const DEFAULT_AVATAR = '/default.jpg';

export default function ModalCardUser({ user }: IProps) {
  const theme = useTheme();
  const [avatarUrl, setAvatarUrl] = useState<string>(DEFAULT_AVATAR);
  useEffect(() => {
    API.get(`get-avatar/${user.username}`, { responseType: 'blob' })
      .then((res) => {
        const url = URL.createObjectURL(res.data);
        setAvatarUrl(url);
      })
      .catch(() => {
        setAvatarUrl(DEFAULT_AVATAR);
      });
  }, [user]);
  return (
    <S.UserBadge>
      <S.AvatarLogoContainer>
        <S.Avatar
          src={avatarUrl}
          alt='Avatar'
        />
      </S.AvatarLogoContainer>
      <C.Text
        $size={10}
        $weight={700}
        $color={theme.colors.text_on_bright}
      >
        {user.username}
      </C.Text>
    </S.UserBadge>
  );
}
