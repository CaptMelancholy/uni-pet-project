/* eslint-disable react-hooks/exhaustive-deps */
import { ICard } from '../../Card/Card.types';
import Modal from '../Modal';
import * as S from './ModalCard.style';
import * as C from '../../../styles/components';
import { useSelector } from 'react-redux';
import { categoriesSelector } from '../../../store/slices/categories/categories.selectors';
import { useEffect, useState } from 'react';
import CardsUtils from '../../../utils/Cards/CardsUtils';

interface IProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  card: ICard;
}

interface ICardInput {
  title: string;
  desc: string;
  date: string;
  time: string;
}

export default function ModalCard({ showModal, setShowModal, card }: IProps) {
  const board = useSelector(categoriesSelector);
  const [title, setTitle] = useState<string>('');
  const [time, setTime] = useState<boolean>(
    card.deadlineInfo?.deadline_time ? false : true,
  );
  const [date, setDate] = useState<boolean>(
    card.deadlineInfo?.deadline_date ? false : true,
  );
  const onClickTime = () => {
    setTime(!time);
  };
  const onClickDate = () => {
    setDate(!date);
  };
  console.log(card.deadlineInfo?.deadline_date ? true : false);
  useEffect(() => {
    setTitle(CardsUtils.findByParentIdCategory(board, card.parent_id));
  }, []);
  return (
    <Modal
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <S.ModalCardTitleInfo>
        <C.InputTitle
          $size={16}
          defaultValue={card.title}
          placeholder='Enter title...'
        />
        <C.Text
          $size={14}
          $weight={700}
        >
          From category:{' '}
          <C.Text
            $size={12}
            $weight={400}
          >
            {title}
          </C.Text>
        </C.Text>
      </S.ModalCardTitleInfo>
      <S.DescContainer>
        <C.Text
          $size={14}
          $weight={500}
        >
          Description:
        </C.Text>
        <C.InputTitle
          $size={12}
          defaultValue={card.desc}
          placeholder='Enter description...'
        />
      </S.DescContainer>
      <S.DataContainer>
        <input
          type='checkbox'
          checked={!date}
          onClick={onClickDate}
        />
        <input
          type='date'
          disabled={date}
          defaultValue={card.deadlineInfo?.deadline_date}
        />
        <input
          type='checkbox'
          checked={!time}
          onClick={onClickTime}
        />
        <input
          type='time'
          disabled={time}
          defaultValue={card.deadlineInfo?.deadline_time}
        />
      </S.DataContainer>
    </Modal>
  );
}
