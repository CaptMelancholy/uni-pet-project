import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import * as S from './CalendarComponent.styles';
import { EPriority, ICard } from '../Card/Card.types';
import { useEffect, useState } from 'react';
import CardsUtils from '../../utils/Cards/CardsUtils';
import CalendarCard from './CalendarComponents/CalendarCard';

interface IProps {
  cards: Array<ICard>;
}

export interface ICalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: {
    status?: EPriority;
    description?: string;
    color: string;
  };
}



export default function CalendarComponent({ cards } : IProps) {
  const locales = {
    'en-US': enUS,
  };
  const [eventList, setEventList] = useState<Array<ICalendarEvent>>([]);
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  useEffect(() => {
    const events = CardsUtils.returnCalendarEvent(cards);
    setEventList(events);
  }, [cards])

  const EventComponent = ({ event }: { event: ICalendarEvent }) => {
    return <CalendarCard event={event} />
  };
  
  return (
    <S.Container>
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor='start'
        components={{
          event: EventComponent,
        }}
        endAccessor='end'
        showAllEvents
        eventPropGetter={(event) => {
          const backgroundColor = event.resource.color || '#3174ad'; // цвет по умолчанию
          return {
            style: { backgroundColor }
          };
        }}
      />
    </S.Container>
  );
}
