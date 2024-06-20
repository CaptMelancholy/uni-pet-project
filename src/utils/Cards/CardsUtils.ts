import { ICategory } from '../../components/Category/Category.types';

class CardsUtils {
    static findByParentIdCategory(board : Array<ICategory>, parentId : number) {
        const { title } = board.find((element) => element.id === parentId)!;
        return title;
    }
}

export default CardsUtils;