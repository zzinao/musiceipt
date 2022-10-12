import React from "react";
import { useNavigate } from 'react-router-dom'
import * as S from './styled'

export const PrintBtn = () => {
    const navigate = useNavigate();

    return (
        <>
            <S.Button onClick={() => navigate("/print")}> Do you need a receipt? </S.Button>
        </>
    )
}
