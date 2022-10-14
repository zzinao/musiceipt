import React, { ReactNode } from 'react'
import * as S from './styled'

interface IProps {
    children: ReactNode;
}

// 왜 수정이 반영이 안돼!?
export const ReceiptBg = ({ children }: IProps) => {
    return (
        <S.Background>{children}</S.Background>
    )
}