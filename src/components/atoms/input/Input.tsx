import React from "react";
import * as S from './styled';

interface InputProps {
    inputName?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onFocus?: () => void;
    placeholder: string;
    value: string;
}

export const Input: React.FC<InputProps> = ({
    onChange,
    onKeyDown,
    onFocus,
    inputName,
    placeholder,
    value,
}) => (
    <S.Input
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        name={inputName}
        value={value}
        placeholder={placeholder}
    />
);