import React from "react";
import Input from "../../atoms/input";
import * as S from './styled'

export const SearchBox = () => {
    return (
        <S.Container>
            <Input
                placeholder="음악검색" />
        </S.Container>
    )
}
