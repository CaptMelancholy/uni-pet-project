import { ICalendarEvent } from '../../components/Calendar/CalendarComponent';
import { EStatuses, ICard } from '../../components/Card/Card.types';
import { ICategory } from '../../components/Category/Category.types';

class CardsUtils {
  public static findByParentIdCategory(
    board: Array<ICategory>,
    parentId: number,
  ) {
    const { title } = board.find((element) => element.id === parentId)!;
    return title;
  }

  public static chooseStatus(
    status: EStatuses,
    date: string,
    time: string | undefined,
  ) {
    if (status === EStatuses.Completed) {
      if (this.compareDates(date, time)) {
        return EStatuses.Deadline;
      } else {
        return EStatuses.InProgress;
      }
    }
    return EStatuses.Completed;
  }

  public static compareDates(date: string, time: string | undefined) {
    const todayDate = new Date();
    const currentDate = new Date(date);
    if (time !== undefined) {
      const [hours, min] = time.split(':');
      currentDate.setHours(parseInt(hours), parseInt(min));
    } else {
      todayDate.setHours(0, 0, 0, 0);
    }
    return todayDate >= currentDate;
  }

  public static returnCalendarEvent(cards : Array<ICard>) : Array<ICalendarEvent> {
    return cards.filter((card) => card.deadlineInfo !== undefined).map((card) => {
      const { deadline_date, deadline_time, status } = card.deadlineInfo!;
      const isTimed = !!deadline_time;
      const start = isTimed
        ? new Date(`${deadline_date}T${deadline_time}`)
        : new Date(deadline_date);
      const end = isTimed
        ? new Date(new Date(start).getTime() + 60 * 60 * 1000)
        : new Date(deadline_date);
        let bgColor = "";
        switch (status) {
          case EStatuses.Deadline:
            bgColor = "#EFB4B4"; // красный
            break;
          case EStatuses.InProgress:
            bgColor = "#B1B3C5"; // синий
            break;
          case EStatuses.Completed:
            bgColor = "#93E1C0"; // зелёный
            break;
          default:
            bgColor = "#2E4057"; // серый
            break;
        }

        return {
          id: String(card.id),
          title: card.title,
          start,
          end,
          allDay: !isTimed,
          resource: {
            status: card.priority,
            description: card.desc,
            color: bgColor,
          },
        }
    });
  }
}

export default CardsUtils;
