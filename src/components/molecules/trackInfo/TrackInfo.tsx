import React from "react";
import AlbumCover from "../../atoms/albumCover";
import { ITrackInfo } from "../../../types/type";
import { IoMdClose } from 'react-icons/io'
import * as S from './styled';

interface IProps {
    track: ITrackInfo;
    index: number;
}

export const TrackInfo = ({ track, index }: IProps) => {
    return (
        <>
            <S.Container>
                <S.Index>{index + 1}</S.Index>
                <S.AlbumBox>
                    <AlbumCover src={track.img} />
                </S.AlbumBox>
                <S.ContentBox>
                    <S.TextBox>
                        <p>{track.title}</p>
                        <p>{track.artist}</p>
                    </S.TextBox>
                    <IoMdClose />
                </S.ContentBox>
            </S.Container>
        </>
    )
}