import { ICalendarEvent } from '../CalendarComponent';
import * as S from './CalendarCard.style';

interface IProps {
    event: ICalendarEvent;
}

export default function CalendarCard({event} : IProps) {
  return (
    <S.Container $color={event.resource.color}>
        {
            event.resource.status && (<S.CardBadge $type={event.resource.status}>{event.resource.status}</S.CardBadge>) 
        }
        <S.CardTitle>{event.title}</S.CardTitle>
        {
            event.resource.description && (<S.CardDescription>{event.resource.description}</S.CardDescription>) 
        }
        
    </S.Container>
  )
}
