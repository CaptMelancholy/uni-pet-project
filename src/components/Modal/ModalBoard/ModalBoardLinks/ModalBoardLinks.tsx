import { useEffect } from 'react';
import * as S from './ModalBoardLinks.styles';
import * as C from '../../../../styles/components';
import API from '../../../../API/api';
import { useTheme } from 'styled-components';
import { EButtonType } from '../../../../utils/DesignType.types';

export interface ILink {
  id: number;
  boardId: number;
  timeLimit: string;
  userLimit: number;
  linkText: string;
  isExpired: boolean;
}

export interface IProps {
  fetchLinks: () => Promise<void>;
  links: Array<ILink>;
}

export default function ModalBoardLinks({ fetchLinks, links }: IProps) {
  const theme = useTheme();

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  const copyToClipboard = (linkText: string) => {
    const fullUrl = `${window.location.origin}/invite/${linkText}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      alert('Link copied');
    })
  };

  const deleteLink = async (linkText: string) => {
    try {
      await API.delete(`links/${linkText}`);
      await fetchLinks();
    } catch (e) {
      console.error('Error: ', e);
    }
  }


  return (
    <S.Container>
      {links !== undefined ? links.map((link) => (
        <S.LinkItem key={link.id}>
          <S.TextContainer>
            <C.Text
              $weight={400}
              $size={14}
            >
              Users: {link.userLimit}
            </C.Text>
            <C.Text
              $weight={400}
              $size={14}
            >
              Date: {link.timeLimit}
            </C.Text>
            <C.Text
              $color={link.isExpired ? theme.colors.red : theme.colors.green}
              $weight={400}
              $size={14}
            >
              {link.isExpired ? 'Link is expired' : 'Link is active'}
            </C.Text>
          </S.TextContainer>
          <S.ButtonContainer>
            <C.Button $type={EButtonType.empty} type='button' onClick={() => copyToClipboard(link.linkText)}>Copy Link</C.Button>
            <C.Button $type={EButtonType.empty} type='button' onClick={() => deleteLink(link.linkText)}>Delete Link</C.Button>
          </S.ButtonContainer>
        </S.LinkItem>
      )) : 'Error'}
    </S.Container>
  );
}
