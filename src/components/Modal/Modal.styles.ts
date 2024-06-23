import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px;
  z-index: 200;
`;

export const ModalNavigation = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  & > svg {
    width: 15px;
    height: auto;
  }
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;
