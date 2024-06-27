import { useDispatch } from 'react-redux';
import { setScreenStatus } from '../../store/slices/screen/screen.slice';

import * as S from './Modal.styles';
import { ReactNode } from 'react';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';

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
        <S.ModalNavigation>
          <IconButton
            $size={16}
            onActionDoNext={clickOnClose}
            buttonType={EType.close}
          />
        </S.ModalNavigation>
        {children}
      </S.ModalContainer>
    )
  );
}
