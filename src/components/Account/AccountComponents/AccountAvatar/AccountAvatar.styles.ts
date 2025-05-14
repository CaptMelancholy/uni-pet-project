import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 100%;
`;

export const ImageUploader = styled.input`
    display: none;
`;

export const AvatarContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid ${({theme}) => theme.colors.secondary};
    cursor: pointer;
    display: flex;
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;