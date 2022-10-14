import { atom, selector } from 'recoil';

export const playListState = atom({
    key: 'playListState',
    default: [],
});

export const searchListState = atom({
    key: 'searchListState',
    default: [],
})

export const playListSelector = selector({
    key: 'playListSelector',
    get: ({ get }) => {
        const list = get(playListState)

        return list;
    }
})  