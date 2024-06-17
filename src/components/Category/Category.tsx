import { ReactNode } from 'react'
import Card from '../Card/Card'
import * as S from './Category.styles'
import { ICategory } from './Category.types'

interface IProps {
    category: ICategory,
}

export default function Category({ category } : IProps) {
  return (
    <S.Wrapper>
        <S.CategoryContainer>
            <S.CategoryTitle>
                {category.title}
            </S.CategoryTitle>
            <S.CardsContainer>
                { category.cards.length !== 0 && (
                    category.cards.map((card) : ReactNode => <Card card={card} /> )
                )}
            </S.CardsContainer>
        </S.CategoryContainer>
    </S.Wrapper>
  )
}
