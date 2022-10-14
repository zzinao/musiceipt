import React from "react";
import { useRecoilValue } from "recoil";
import { searchListState } from '../../../store/atom/track'
import TrackInfo from "../../molecules/trackInfo";

export const SearchList = () => {
    const list = useRecoilValue(searchListState);
    return (
        <>
            {list.map((track, index) =>
                <TrackInfo track={track} index={index} />
            )}

        </>
    )
};