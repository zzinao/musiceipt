export interface InputProps {
    inputName: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
    onFocus: () => void;
    placeholder: string;
};

export interface ITrackInfo {
    title: string;
    artist: string;
    img: string;
    length?: number;
};