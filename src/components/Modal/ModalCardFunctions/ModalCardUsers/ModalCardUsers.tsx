import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import * as S from './ModalCardUsers.styles';
import ModalCardUser, { IUserCard } from './ModalCardUser/ModalCardUser';
import API from '../../../../API/api';
import * as C from '../../../../styles/components';
import { EInputFieldTypes } from '../../../../utils/DesignType.types';

interface IProps {
  cardId: number;
  boardId: number;
  users: Array<IUserCard> | undefined;
  fetchUsers: () => Promise<void>;
  setShowModalFunctions: (flag: boolean) => void;
}

export default function ModalCardUsers({
  cardId,
  boardId,
  users,
  fetchUsers,
  setShowModalFunctions
}: IProps) {
  const [availableUsers, setAvailableUsers] = useState<Array<IUserCard>>();
  const fetchAvailableUsers = useCallback(async () => {
    try {
      const { data } = await API.get(`cards/users/${boardId}/${cardId}`);
      setAvailableUsers(data);
    } catch (error) {
      console.error('Ошибка получения доступных пользователей:', error);
    }
  }, [boardId, cardId]);

  useEffect(() => {
    fetchUsers();
    fetchAvailableUsers();
  }, [fetchUsers, fetchAvailableUsers]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const userId = Number(event.target.value);

    if (userId) {
      handleAttach(userId);
    }
  };

  const handleAttach = async (userId: number) => {
    try {
      await API.post('cards/users', { userId, cardId });
      await fetchUsers();
      await fetchAvailableUsers();
    } catch (error) {
      console.error('Ошибка прикрепления пользователей:', error);
    }
  };

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
      {users !== undefined && users.length !== 0 && (
        <S.CardUsersList>
          {users.map((user) => (
            <ModalCardUser
              key={user.id}
              user={user}
              cardId={cardId}
              setShowModalFunctions={setShowModalFunctions}
              fetchUsers={fetchUsers}
              fetchAvailableUsers={fetchAvailableUsers}
            />
          ))}
        </S.CardUsersList>
      )}
    </S.CardUsersWrapper>
  );
}
