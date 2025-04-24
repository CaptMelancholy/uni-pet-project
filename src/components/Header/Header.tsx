import { generatePath } from 'react-router-dom';
import * as S from './Header.style';
import * as C from '../../styles/components';
import { FaComment, FaDoorOpen } from 'react-icons/fa6';
import DefaultRoutes from '../../Routes/Routes';
import { useTheme } from 'styled-components';
import { useAuth } from '../../context/AuthHooks';
import { useEffect, useState } from 'react';
import API from '../../API/api';

const DEFAULT_AVATAR = '/default.jpg';

export default function Header() {
  const theme = useTheme();
  const { isAuth, authName } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState<string>(DEFAULT_AVATAR);
  useEffect(() => {
    API.get(`avatar/me`, { responseType: 'blob' })
      .then((res) => {
        const url = URL.createObjectURL(res.data);
        setAvatarUrl(url);
      })
      .catch(() => {
        setAvatarUrl(DEFAULT_AVATAR);
      });
  }, [authName]);
  return (
    <S.Header>
      <S.LogoContainer to={generatePath(DefaultRoutes.default)}>
        <svg
          fill='#FFFFFF'
          xmlns='http://www.w3.org/2000/svg'
          width='40px'
          height='40px'
          viewBox='0 0 31 31'
        >
          <g>
            <path d='M0,0v31h31V0H0z M14.371,25.352H4.108V5.646h10.263V25.352z M26.893,16.73H16.629V5.646h10.264V16.73z' />
          </g>
        </svg>
      </S.LogoContainer>
      <S.Nav>
        {isAuth ? (
          <>
            <C.Text
              $weight={700}
              $size={16}
              $color={theme.colors.text_on_bright}
            >
              Hello, {authName}
            </C.Text>
            <S.LogoContainer to={generatePath(DefaultRoutes.account)}>
              <S.AvatarLogoContainer>
                <S.Avatar
                  src={avatarUrl}
                  alt='Avatar'
                />
              </S.AvatarLogoContainer>
            </S.LogoContainer>
            <S.LogoContainer to={generatePath(DefaultRoutes.logout)}>
              <FaDoorOpen />
            </S.LogoContainer>
          </>
        ) : (
          <>
            <S.LogoContainer to={generatePath(DefaultRoutes.auth)}>
              <FaComment />
            </S.LogoContainer>
          </>
        )}

        {/*  */}
      </S.Nav>
    </S.Header>
  );
}
