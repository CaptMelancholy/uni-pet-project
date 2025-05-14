import API from '../../../API/api';
import IconButton from '../../IconButtons/IconButton';
import { EType } from '../../IconButtons/IconButton.types';
import { IBoardAccountCard } from '../AccountComponent';
import * as S from './AccountObject.styles';

interface IProps {
  account: IBoardAccountCard;
  fetchAllBoardAccount: () => Promise<void>;
}

export default function AccountObject({
  account,
  fetchAllBoardAccount,
}: IProps) {
  const deleteAccount = async () => {
    try {
      await API.delete(`account/operations/${account.id}`);
      await fetchAllBoardAccount();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <S.BoardAccount $type={account.type}>
      <S.InfoContainer>
        <S.TextInfo
          $size={14}
          $weight={600}
        >
          Operation type: {account.type}
        </S.TextInfo>
        <S.TextInfo
          $size={14}
          $weight={600}
        >
          Text: {account.text}
        </S.TextInfo>
        <S.TextInfo
          $size={14}
          $weight={600}
        >
          Account: {account.account}
        </S.TextInfo>
        {account.card && (
          <S.TextInfo
            $size={14}
            $weight={600}
          >
            Card attachment: {account.card}
          </S.TextInfo>
        )}
      </S.InfoContainer>
      <S.Settings>
        <IconButton
          onActionDoNext={deleteAccount}
          $size={15}
          buttonType={EType.delete}
        />
      </S.Settings>
    </S.BoardAccount>
  );
}
