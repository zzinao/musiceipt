import styled from '@emotion/styled';

interface IProps {
    src: string;
}

export const CoverImage = styled.div<IProps>`
    width: 100px;
    height: 100px;
    background-image: url('${({ src }) => src}');
    background-size: cover;
`;