import React from 'react'
import * as S from './styled'

interface IProps {
    children: JSX.Element
}

export const ReceiptBg = ({ children }: IProps) => {
    return (
        <S.Background>{children}</S.Background>
    )
}