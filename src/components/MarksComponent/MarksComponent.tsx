import { useCallback, useEffect, useState } from 'react';
import AddMarkForm, { IMark } from '../AddMarkForm/AddMarkForm';
import * as S from './MarksComponent.styles';
import { EButtonType } from '../../utils/DesignType.types';
import MarksObject from './MarksObject/MarksObject';
import API from '../../API/api';

interface IProps {
  boardId: number;
}

export default function MarksComponent({ boardId }: IProps) {
  const [showAddMark, setShowAddMark] = useState<boolean>(false);
  const [marks, setMarks] = useState<Array<IMark>>([]);
  const fetchAllMarks = useCallback(async () => {
    try {
        const { data } = await API.get(`marks/all/${boardId}`);
        setMarks(data);
    } catch (error) {
        console.error('Ошибка получения меток:', error);
    }
  }, [boardId]);

  useEffect(() => {
    const getMarks = async() => {
        await fetchAllMarks();
    }
    getMarks();
  }, [fetchAllMarks])
  const handleAddClick = () => {
    setShowAddMark(true);
  };
  return (
    <S.MarksContainer>
      {marks !== undefined && marks.length !== 0 && marks.map((mark) => (
        <MarksObject
          key={mark.id}
          mark={mark}
          fetchAllMarks={fetchAllMarks}
        />
      ))}
  
      {showAddMark ? (
        <AddMarkForm
          boardId={boardId}
          setShowAddMark={setShowAddMark}
          fetchAllMarks={fetchAllMarks}
        />
      ) : (
        <S.ButtonOnField
          $type={EButtonType.empty}
          onClick={handleAddClick}
        >
          Add mark
        </S.ButtonOnField>
      )}
    </S.MarksContainer>
  );
  
}
