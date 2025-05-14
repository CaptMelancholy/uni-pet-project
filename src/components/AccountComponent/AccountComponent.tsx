import { useCallback, useEffect, useState } from 'react';
import { ETypeBoardAccount } from '../AddAccountBoardForm/AddAccountBoardForm.types';
import API from '../../API/api';
import * as S from './AccountComponent.styles';
import { useTheme } from 'styled-components';
import AddAccountBoardForm from '../AddAccountBoardForm/AddAccountBoardForm';
import { EButtonType } from '../../utils/DesignType.types';
import AccountObject from './AccountObject/AccountObject';

interface IProps {
  boardId: number;
}

export interface IBoardAccountCard {
  id: number;
  text: string;
  account: number;
  card?: string;
  boardId: number;
  type: ETypeBoardAccount;
}

export default function AccountComponent({ boardId }: IProps) {
  const [showAddAccountBoardForm, setShowAddAccountBoardForm] =
    useState<boolean>(false);
  const theme = useTheme();
  const [accounts, setAccounts] = useState<Array<IBoardAccountCard>>([]);
  const [balance, setBalance] = useState<number>();
  const fetchAllBoardAccount = useCallback(async () => {
    try {
      const res1 = await API.get(`account/operations/${boardId}`);
      const res2 = await API.get(`account/balance/${boardId}`);
      setAccounts(res1.data);
      setBalance(parseFloat(res2.data.balance));
    } catch (e) {
      console.error(e);
    }
  }, [boardId]);
  useEffect(() => {
    fetchAllBoardAccount();
  }, [fetchAllBoardAccount]);
  const handleAddClick = () => {
    setShowAddAccountBoardForm(true);
  };
  return (
    <S.AccountWrapper>
      <S.AccountTitle
        $color={theme.colors.text_on_bright}
        $size={24}
        $weight={700}
      >
        Account balance: {balance} cu.
      </S.AccountTitle>
      <S.AccountContainer>
        {accounts !== undefined &&
          accounts.length !== 0 &&
          accounts.map((account) => (
            <AccountObject
              account={account}
              fetchAllBoardAccount={fetchAllBoardAccount}
            />
          ))}
        {showAddAccountBoardForm ? (
          <AddAccountBoardForm
            boardId={boardId}
            setShowAddAccountBoardForm={setShowAddAccountBoardForm}
            fetchAllAccountBoard={fetchAllBoardAccount}
          />
        ) : (
          <S.ButtonOnField
            $type={EButtonType.empty}
            onClick={handleAddClick}
          >
            Add account
          </S.ButtonOnField>
        )}
      </S.AccountContainer>
    </S.AccountWrapper>
  );
}
