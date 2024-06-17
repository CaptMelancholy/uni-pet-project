import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  gap: 5px;
  box-shadow: 1px 9px 18px 0px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 1px 9px 18px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 1px 9px 18px 0px rgba(0, 0, 0, 0.51);
  border-radius: 10px;
`;

export const CardBadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3px;
`;

export const CardBadge = styled.div`
  background-color: ${(props) => props.color || props.theme.colors.grey};
  display: flex;
  align-items: center;
  flex-basis: 25%;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
`;

export const CardBadgeText = styled.p`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: black;
`;

export const CardTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CardDescription = styled.p`
  font-weight: 100;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CardFooter = styled.div`
  display: flex;
  // justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

export const DateTimeContainer = styled.div`
  display: flex;
  padding: 2px 5px;
  gap: 5px;
  background-color: ${(props) =>
    props.color || props.theme.colors.in_progress_background};
  font-weight: 700;
  font-size: 10px;
  border-radius: 5px;
`;

export const DateTimeTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.color || props.theme.colors.in_progress_text};
`;

export const CardAvatarAttachment = styled.div``;
