import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  flex: 0 0 auto;
`;

export const Logo = styled.a`
  width: 100px;
`;

export const UserSettings = styled.div`
  display: flex;
  gap: 5px;
  & > svg {
    width: 30px;
    height: auto;
  }
`;
