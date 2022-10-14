import React, { ReactNode } from 'react'
import * as S from './styled'

interface IProps {
    children: ReactNode;
}

// 왜 안되나..?
export const ReceiptBg = ({ children }: IProps) => {
    return (
        <S.Background>{children}</S.Background>
    )
}