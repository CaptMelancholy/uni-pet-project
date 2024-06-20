import CategoryList from '../components/CategoryList/CategoryList'
import Template from '../components/Template/Template'
import { CategoryData } from '../temp/data'

export default function BoardPage() {
  return (
    <Template title='HELLO WORLD'>
        <CategoryList categories={CategoryData} />
    </Template>
  )
}
