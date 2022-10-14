import React from 'react';
import * as S from './styled';

interface IProps {
    src: string;
}

export const AlbumCover = ({ src }: IProps) => {
    return (
        <>
            <S.CoverImage src={src}></S.CoverImage>
        </>
    )
};