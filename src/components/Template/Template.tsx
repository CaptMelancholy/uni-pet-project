import { ReactNode } from 'react'
import * as S from './Template.styles'
import * as C from '../../styles/components'

interface IProps {
    title: string;
    children: ReactNode;
}

export default function Template({ title, children } : IProps) {
  return (
    <S.TemplateContainer>
        <S.TextContainer>
            <C.PageTitle>{ title }</C.PageTitle>
        </S.TextContainer>
        { children }
    </S.TemplateContainer>
  )
}
