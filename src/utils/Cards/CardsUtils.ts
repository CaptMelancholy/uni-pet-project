import { EStatuses } from '../../components/Card/Card.types';
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

  private static compareDates(date: string, time: string | undefined) {
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
}

export default CardsUtils;
