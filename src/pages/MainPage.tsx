import React from "react";
import LogoImage from "../components/atoms/logo";
import PrintBtn from "../components/atoms/printBtn";
import PlayList from "../components/organisms/playList";
import SearchBox from "../components/organisms/searchBox";
import * as S from './styled'

const MainPage = () => {
    return (
        <S.MainContainer>
            <LogoImage />
            <SearchBox />
            <PlayList />
            <PrintBtn />
        </S.MainContainer>
    )
}

export default MainPage;