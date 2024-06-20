import { useDispatch } from 'react-redux';
import { setScreenStatus } from '../../store/slices/screen/screen.slice';

import * as S from './Modal.style';
import { FaX } from 'react-icons/fa6';
import { ReactNode } from 'react';

interface IProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  children: ReactNode;
}

export default function Modal({ showModal, setShowModal, children }: IProps) {
  const dispatch = useDispatch();
  const clickOnClose = () => {
    document.body.style.overflow = 'scroll';
    dispatch(setScreenStatus(false));
    setShowModal(false);
  };
  return (
    showModal && (
      <S.ModalContainer>
        <S.ModalNavigation role='button' onClick={() => clickOnClose()}>
          <FaX />
        </S.ModalNavigation>
        <S.ModalContentContainer>{children}</S.ModalContentContainer>
      </S.ModalContainer>
    )
  );
}
