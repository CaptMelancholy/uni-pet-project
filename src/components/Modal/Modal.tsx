import * as C from '../../styles/components';
import * as S from './Modal.styles';
import { ReactNode } from 'react';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import { useTheme } from 'styled-components';
import { useScreenBlock } from '../../context/ScreenHooks';

interface IProps {
  title: string;
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  children: ReactNode;
}

export default function Modal(props: IProps) {
  const { showModal, setShowModal, children } = props;
  const theme = useTheme();
  const { setScreen } = useScreenBlock();
  const clickOnClose = () => {
    document.body.style.overflow = 'scroll';
    setScreen(false);
    setShowModal(false);
  };
  return (
    showModal && (
      <S.ModalContainer>
        <S.ModalNavigation>
          <C.Text
            $size={20}
            $weight={700}
            $color={theme.colors.text_on_bright}
          >
            {props.title}
          </C.Text>
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
