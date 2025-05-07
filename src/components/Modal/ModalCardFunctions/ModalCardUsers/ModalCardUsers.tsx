import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import * as S from './ModalCardUsers.styles';
import ModalCardUser, { IUserCard } from './ModalCardUser/ModalCardUser';
import API from '../../../../API/api';
import * as C from '../../../../styles/components';
import { EInputFieldTypes } from '../../../../utils/DesignType.types';

interface IProps {
  cardId: number;
  boardId: number;
}

export default function ModalCardUsers({ cardId, boardId }: IProps) {
  const [users, setUsers] = useState<Array<IUserCard>>();
  const [availableUsers, setAvailableUsers] = useState<Array<IUserCard>>();
  const fetchAvailableUsers = useCallback(async () => {
    try {
      const { data } = await API.get(`cards/users/${boardId}/${cardId}`);
      setAvailableUsers(data);
    } catch (error) {
      console.error('Ошибка получения доступных пользователей:', error);
    }
  }, [boardId, cardId]);

  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await API.get(`cards/attached/${cardId}`);
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error('Ошибка получения пользователей:', error);
    }
  }, [cardId]);

  useEffect(() => {
    fetchUsers();
    fetchAvailableUsers();
  }, [fetchUsers, fetchAvailableUsers]);

  const handleSelectChange = (event : ChangeEvent<HTMLSelectElement>) => {
    const userId = Number(event.target.value);

    if(userId) {
      handleAttach(userId);
    }
  }

  const handleAttach = async (userId: number) => {
    try {
      await API.post('cards/users', { userId, cardId });
      fetchUsers();
      fetchAvailableUsers();
    } catch (error) {
      console.error('Ошибка прикрепления пользователей:', error);
    }
  }

  return (
    <S.CardUsersWrapper>
      <C.Select
        $type={EInputFieldTypes.onBright}
        defaultValue={''}
        onChange={handleSelectChange}
      >
        <C.Option value=''>Select user</C.Option>
        {availableUsers?.map((user) => (
          <C.Option
            key={user.id}
            value={user.id}
          >
            {user.username}
          </C.Option>
        ))}
      </C.Select>
      {users !== undefined && users.length !== 0 ? (
        <S.CardUsersList>
          {users.map((user) => (
            <ModalCardUser user={user} />
          ))}
        </S.CardUsersList>
      ) : (
        <></>
      )}
    </S.CardUsersWrapper>
  );
}
