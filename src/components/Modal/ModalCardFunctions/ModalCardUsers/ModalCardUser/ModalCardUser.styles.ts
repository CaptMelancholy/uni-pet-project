import styled from 'styled-components';

export const UserBadge = styled.div`
    display: flex;
    width: 150px;
    gap: 5px;
    border-radius: 10px;
    align-items: center;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.cyan};
`;

export const AvatarLogoContainer = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;