import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { IMark } from '../../../AddMarkForm/AddMarkForm';
import API from '../../../../API/api';
import * as S from './ModalCardMarks.styles';
import * as C from '../../../../styles/components';
import { EInputFieldTypes } from '../../../../utils/DesignType.types';
import ModalCardMark from './ModalCardMark/ModalCardMark';

interface IProps {
  cardId: number;
  boardId: number;
  marks: Array<IMark> | undefined;
  fetchMarks: () => Promise<void>;
}

export default function ModalCardMarks({
  cardId,
  boardId,
  marks,
  fetchMarks,
}: IProps) {
  const [availableMarks, setAvailableMarks] = useState<Array<IMark>>([]);
  const fetchAvailableMarks = useCallback(async () => {
    try {
      const { data } = await API.get(`marks/available/${boardId}/${cardId}`);
      setAvailableMarks(data);
    } catch (e) {
      console.error(e);
    }
  }, [cardId, boardId]);

  useEffect(() => {
    fetchMarks();
    fetchAvailableMarks();
  }, [fetchMarks, fetchAvailableMarks]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const markId = Number(event.target.value);

    if (markId) {
      handleAttach(markId);
    }
  };

  const handleAttach = async (markId: number) => {
    try {
      await API.post('marks/attached', { markId, cardId });
      await fetchMarks();
      await fetchAvailableMarks();
    } catch (error) {
      console.error('Ошибка прикрепления пользователей:', error);
    }
  };

  return (
    <S.CardMarksWrapper>
      <C.Select
        $type={EInputFieldTypes.onBright}
        defaultValue={''}
        onChange={handleSelectChange}
      >
        <C.Option value=''>Select mark</C.Option>
        {availableMarks?.map((mark) => (
          <C.Option
            key={mark.id}
            value={mark.id}
          >
            {mark.title}
          </C.Option>
        ))}
      </C.Select>
      {marks !== undefined && marks.length !== 0 && (
        <S.CardMarksList>
          {marks.map((mark) => (
            <ModalCardMark
              key={mark.id}
              mark={mark}
              cardId={cardId}
              fetchMarks={fetchMarks}
              fetchAvailableMarks={fetchAvailableMarks}
            />
          ))}
        </S.CardMarksList>
      )}
    </S.CardMarksWrapper>
  );
}
