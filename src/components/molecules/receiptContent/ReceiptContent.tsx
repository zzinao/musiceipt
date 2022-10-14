import React from 'react'
import * as S from './styled'


export const ReceiptContent = () => {

    const list = [
        {
            title: "Catch me If you can", artist: "혈계전선", img:
                'https://i.scdn.co/image/ab67616d0000b273395d71ee367b7ff3f66b3621'
        },
        { title: "오라, 달콤한 죽음이여", artist: "에반게리온", img: "https://i1.sndcdn.com/artworks-000569623136-l6vmoq-t500x500.jpg" },
        { title: "Butter", artist: "BTS", img: "https://upload.wikimedia.org/wikipedia/ko/d/db/BTS_-_Butter.png" }
    ]

    const time = Date();
    console.log(time)
    return (
        <S.Container>
            <p>{time}</p>
            {list.map((track, index) =>
                <S.ListBox>
                    <p>{index + 1}</p>

                    <S.TrackBox>
                        <S.TrackInfo>
                            <p>{track.title}</p>
                            <p>{track.artist}</p>
                        </S.TrackInfo>
                        <p>3:00</p>
                    </S.TrackBox>
                </S.ListBox>
            )
            }
            <S.ListInfo>
                <span>ITEM COUNT</span>
                <span>{list.length}</span>
            </S.ListInfo>
            <S.ListInfo>
                <span>TOTAL</span>
                <span>8:47</span>
            </S.ListInfo>
        </S.Container>
    )
}