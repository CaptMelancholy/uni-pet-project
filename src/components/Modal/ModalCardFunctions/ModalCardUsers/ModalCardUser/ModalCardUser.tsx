import * as S from './ModalCardUser.styles';
import * as C from '../../../../../styles/components';
import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';
import API from '../../../../../API/api';
import IconButton from '../../../../IconButtons/IconButton';
import { EType } from '../../../../IconButtons/IconButton.types';
import { generatePath, useNavigate } from 'react-router-dom';
import DefaultRoutes from '../../../../../Routes/Routes';
import { useScreenBlock } from '../../../../../context/ScreenHooks';
import type { MouseEvent } from 'react';

export interface IUserCard {
  id: number;
  username: string;
}

interface IProps {
  user: IUserCard;
  cardId: number;
  fetchUsers: () => Promise<void>;
  fetchAvailableUsers: () => Promise<void>;
  setShowModalFunctions: (flag: boolean) => void;
}

const DEFAULT_AVATAR = '/default.jpg';

export default function ModalCardUser({
  user,
  cardId,
  fetchUsers,
  fetchAvailableUsers,
  setShowModalFunctions,
}: IProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { setScreen } = useScreenBlock();
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setScreen(false);
    setShowModalFunctions(false);
    document.body.style.overflow = 'scroll';
    navigate(generatePath(DefaultRoutes.u, { username: user.username }));
  };

  const [avatarUrl, setAvatarUrl] = useState<string>(DEFAULT_AVATAR);
  const deleteUser = async () => {
    try {
      await API.delete(`cards/users/${user.id}/${cardId}`);
      await fetchUsers();
      await fetchAvailableUsers();
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    API.get(`/profile/users/avatar/${user.username}`, { responseType: 'blob' })
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
      <S.LinkToProfile
        to='#'
        onClick={handleClick}
      >
        <C.Text
          $size={10}
          $weight={700}
          $color={theme.colors.text_on_bright}
        >
          {user.username}
        </C.Text>
      </S.LinkToProfile>

      <S.Settings>
        <IconButton
          onActionDoNext={deleteUser}
          $size={15}
          buttonType={EType.delete}
        />
      </S.Settings>
    </S.UserBadge>
  );
}
