import React from "react";
import { useRecoilValue } from "recoil";
import { playListState } from '../../../store/atom/track'
import TrackInfo from "../../molecules/trackInfo";

export const PlayList = () => {
    const playList = useRecoilValue(playListState);
    return (
        <>
            {playList.map((track, index) =>
                <TrackInfo track={track} index={index} />
            )}

        </>
    )
};