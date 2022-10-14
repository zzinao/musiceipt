import React, { useState, useEffect } from "react";
import { searchListApi } from "../../../apis/api";
import Input from "../../atoms/input";
import * as S from './styled'

export const SearchBox = () => {
    const [search, setSearch] = useState("")
    const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target?.value)
    }

    useEffect(() => {
        searchListApi(search);
    }, [search])

    return (
        <S.Container>
            <Input
                value={search}
                onChange={searchHandle}
                placeholder="음악검색" />
        </S.Container>
    )
}
