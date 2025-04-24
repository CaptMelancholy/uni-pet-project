import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  align-items: center;
  flex: 0 0 auto;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.a`
  width: 100px;
  display: flex;
  align-items: center;
  & > {
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  & > svg {
    fill: ${({ theme }) => theme.colors.text_on_bright};
    width: 30px;
    height: auto;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  & > svg {
    fill: ${({ theme }) => theme.colors.text_on_bright};
    width: 100%;
    height: auto;
  }
`;

export const AvatarLogoContainer = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;