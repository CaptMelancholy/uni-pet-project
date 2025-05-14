import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  justify-content: center;
`;

export const ButtonDefault = styled.div`
  padding: 0 40px 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.text_on_bright};
  }
  &.active {
    color: ${({ theme }) => theme.colors.text_on_bright};
  }
  &.active::after {
    content: '';
    position: absolute;
    height: 2px;
    left: 50%;
    top: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text_on_bright};
    transform: translate(-50%, -50%);
  }
`;

export const ButtonBold = styled(ButtonDefault)`
  padding: 0 0 20px;
  width: 239px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;
