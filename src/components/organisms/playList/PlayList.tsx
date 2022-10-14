import React from "react";
import TrackInfo from "../../molecules/trackInfo";

const list = [
    {
        title: "Catch me If you can", artist: "혈계전선", img:
            'https://i.scdn.co/image/ab67616d0000b273395d71ee367b7ff3f66b3621'
    },
    { title: "오라, 달콤한 죽음이여", artist: "에반게리온", img: "https://i1.sndcdn.com/artworks-000569623136-l6vmoq-t500x500.jpg" },
    { title: "Butter", artist: "BTS", img: "https://upload.wikimedia.org/wikipedia/ko/d/db/BTS_-_Butter.png" }
]

export const PlayList = () => {
    return (
        <>
            {list.map((track, index) =>
                <TrackInfo track={track} index={index} />
            )}

        </>
    )
};