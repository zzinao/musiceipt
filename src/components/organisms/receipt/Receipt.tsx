import React from 'react'
import ReceiptBg from '../../atoms/receiptBg'
import ReceiptContent from '../../molecules/receiptContent'
import * as S from './styled'

export const Receipt = () => {
    return (
        <ReceiptBg>
            <p>logo</p>
            <ReceiptContent />
            <p>바코드</p>
        </ReceiptBg>
    )
}