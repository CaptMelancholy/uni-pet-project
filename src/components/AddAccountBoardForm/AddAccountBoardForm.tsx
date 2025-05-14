import { useForm } from 'react-hook-form';
import API from '../../API/api';
import * as S from './AddAccountBoardForm.styles';
import * as C from '../../styles/components';
import { EButtonType, EInputFieldTypes } from '../../utils/DesignType.types';
import IconButton from '../IconButtons/IconButton';
import { EType } from '../IconButtons/IconButton.types';
import { useCallback, useEffect, useState } from 'react';
import {
  ICardForAccount,
  IBoardAccount,
  ETypeBoardAccount,
} from './AddAccountBoardForm.types';

interface IBoardInput {
  text: string;
  account: number;
  cardId?: string;
}

interface IProps {
  setShowAddAccountBoardForm: (flag: boolean) => void;
  boardId: number;
  fetchAllAccountBoard: () => Promise<void>;
}

export default function AddAccountBoardForm({
  setShowAddAccountBoardForm,
  boardId,
  fetchAllAccountBoard,
}: IProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBoardInput>();
  const [cards, setCards] = useState<Array<ICardForAccount>>([]);
  const submitOptions = {
    text: {
      required: 'Text is required',
      validate: {
        trapSpacesForRequiredFields: (v: string) =>
          !!v.trim() || 'White spaces not acceptable',
      },
    },
    account: {
      required: 'Account is required',
      validate: {
        notZero: (v: number) => v !== 0 || 'Account must not be zero',
        maxTwoDecimalPlaces: (v: number) =>
          /^-?\d+(\.\d{1,2})?$/.test(v.toString()) ||
          'No more than two decimal places allowed',
      },
    },
  };
  const handleOnClose = () => {
    reset();
    setShowAddAccountBoardForm(false);
  };
  const fetchNewCards = useCallback(async () => {
    const { data } = await API.get(`cards/${boardId}`);
    setCards(data);
  }, [boardId]);
  useEffect(() => {
    fetchNewCards();
  }, [fetchNewCards]);

  const handleAddSubmit = (data: IBoardInput) => {
    const pushNewBoardAccount = async (newBoardAccount: IBoardAccount) => {
      try {
        await API.post('account/operations', newBoardAccount);
        await fetchAllAccountBoard();
      } catch (e) {
        console.error(e);
      }
    };
    const newBoardAccount: IBoardAccount = {
      id: 0,
      text: data.text,
      account: data.account,
      cardId: data.cardId !== '' ? Number(data.cardId) : undefined,
      boardId,
      type:
        data.account > 0
          ? ETypeBoardAccount.Crediting
          : ETypeBoardAccount.Debit,
    };
    pushNewBoardAccount(newBoardAccount);
    setShowAddAccountBoardForm(false);
    reset();
  };
  return (
    <S.AddAccountBoardContainer onSubmit={handleSubmit(handleAddSubmit)}>
      <S.InfoContainer>
        <S.FormText
          $weight={700}
          $size={18}
        >
          Adding Account
        </S.FormText>
        <IconButton
          onActionDoNext={handleOnClose}
          $size={14}
          buttonType={EType.close}
        />
      </S.InfoContainer>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={14}
        >
          Text
        </S.FormText>
        <C.InputField
          $type={EInputFieldTypes.onDark}
          $size={14}
          placeholder='Enter title...'
          {...register('text', submitOptions.text)}
        />
        {errors.text && <C.Error>{errors.text.message}</C.Error>}
      </S.InputContainer>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={14}
        >
          Account
        </S.FormText>
        <C.InputField
          type='number'
          step='0.01'
          $type={EInputFieldTypes.onDark}
          $size={14}
          placeholder='Enter account...'
          {...register('account', submitOptions.account)}
        />
        {errors.account && <C.Error>{errors.account.message}</C.Error>}
      </S.InputContainer>
      <S.InputContainer>
        <S.FormText
          $weight={400}
          $size={14}
        >
          Card
        </S.FormText>
        <C.Select
          $type={EInputFieldTypes.onBright}
          defaultValue={''}
          {...register('cardId')}
        >
          <C.Option
            value=''
            selected
            disabled
          >
            Select card
          </C.Option>
          {cards.length !== 0 &&
            cards !== undefined &&
            cards.map((card) => (
              <C.Option
                key={card.id}
                value={String(card.id)}
              >
                {card.title}
              </C.Option>
            ))}
        </C.Select>
      </S.InputContainer>
      <C.Button
        $type={EButtonType.add}
        type='submit'
      >
        Add account
      </C.Button>
    </S.AddAccountBoardContainer>
  );
}
