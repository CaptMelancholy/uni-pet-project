import * as S from './Board.styles';
import Category from '../Category/Category';
import { useEffect, useState } from 'react';
import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';
import { DragDropContext, DragUpdate } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { boardsSelector } from '../../store/slices/categories/boards.selectors';
import IBoard from './Board.types';
import { EButtonType } from '../../utils/DesignType.types';
import { ICard, ICardDTO } from '../Card/Card.types';
import { AppDispatch } from '../../store';
import { updateCard } from '../../store/thunks/boards.thunk';
import TabButtons from '../Tabs/TabButtons/TabButtons';
import TabContent from '../Tabs/TabContent/TabContent';
import CalendarComponent from '../Calendar/CalendarComponent';
import { ICategory } from '../Category/Category.types';

interface IProps {
  board: IBoard;
}

export default function Board({ board }: IProps) {
  const [showAddCategory, setShowAddCategory] = useState<boolean>(false);
  const boards = useSelector(boardsSelector);
  const dispatch = useDispatch<AppDispatch>();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [cardEvents, setCardEvents] = useState<Array<ICard>>([]);
  const handleAddClick = () => {
    setShowAddCategory(true);
  };
  useEffect(() => {
    function mergeCardArrays(categories: ICategory[]): ICard[] {
      return categories.flatMap((category) => category.cards);
    }
    setCardEvents(mergeCardArrays(board.categories));
  }, [board]);

  const onDragEnd = (result: DragUpdate) => {
    const updateCardOrder = async (cards: ICard[]) => {
      for (const card of cards) {
        const dto: ICardDTO = {
          id: card.id,
          categoryId: card.categoryId,
          boardId: card.boardId,
          title: card.title,
          deadline_date: card.deadlineInfo?.deadline_date,
          deadline_time: card.deadlineInfo?.deadline_time,
          status: card.deadlineInfo?.status,
          priority: card.priority,
          desc: card.desc,
          order: card.order,
        };
        dispatch(updateCard({ card: dto }));
      }
    };
    const { destination, source, type } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const currentBoard = [...boards].find((el) => el.id === board.id);

    if (type === 'category' && currentBoard !== undefined) {
      const categoryList = currentBoard.categories;
      const sourceCategory = categoryList.find(
        (el) => el.id === parseInt(source.droppableId),
      );
      const destinationCategory = categoryList.find(
        (el) => el.id === parseInt(destination.droppableId),
      );
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      if (destination.droppableId === source.droppableId) {
        if (destinationCategory !== undefined) {
          const sortedCards = [...destinationCategory.cards].sort(
            (a, b) => a.order - b.order,
          );
          const [removedItem] = sortedCards.splice(sourceIndex, 1);
          const newCard: ICard = {
            ...removedItem,
            categoryId: parseInt(destination.droppableId),
          };
          sortedCards.splice(destinationIndex, 0, newCard);
          const reorderedCards = sortedCards.map((card, index) => ({
            ...card,
            order: index,
          }));

          updateCardOrder(reorderedCards);
        }
      } else if (
        sourceCategory !== undefined &&
        destinationCategory !== undefined
      ) {
        const sourceCards = [...sourceCategory.cards];
        const destinationCards = [...destinationCategory.cards];

        const [removedItem] = sourceCards.splice(sourceIndex, 1);
        const newCard: ICard = {
          ...removedItem,
          categoryId: parseInt(destination.droppableId),
        };
        destinationCards.splice(destinationIndex, 0, newCard);
        const reorderedCardsDest = sourceCards.map((card, index) => ({
          ...card,
          order: index,
        }));
        const reorderedSource = destinationCards.map((card, index) => ({
          ...card,
          order: index,
        }));
        updateCardOrder([...reorderedCardsDest, ...reorderedSource]);
      }
    }
    return;
  };

  return (
    <>
      <TabButtons
        name={['BOARD', 'CALENDAR']}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent activeTab={activeTab}>
        <DragDropContext onDragEnd={onDragEnd}>
          <S.BoardContainer data-testid='board'>
            {board.categories.length !== 0 &&
              board.categories.map((category) => (
                <Category
                  key={category.id}
                  category={category}
                />
              ))}
            {showAddCategory ? (
              <AddCategoryForm
                setShowAddCategory={setShowAddCategory}
                spaceId={board.id}
              />
            ) : (
              <S.ButtonOnField
                $type={EButtonType.empty}
                onClick={handleAddClick}
              >
                Add category
              </S.ButtonOnField>
            )}
          </S.BoardContainer>
        </DragDropContext>
        <CalendarComponent cards={cardEvents} />
      </TabContent>
    </>
  );
}
