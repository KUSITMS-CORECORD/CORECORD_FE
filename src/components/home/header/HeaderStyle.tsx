import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 17.4375rem;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%),
    #d6dcff;
  padding: 4.1875rem 1.25rem 0px;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const YellowBlur = styled.div`
  position: absolute;
  top: -7.0625rem;
  left: -4.5rem;
  width: 14.125rem;
  height: 14.125rem;
  background-color: #fcff65;
  opacity: 0.2;
  filter: blur(4.6875rem);
  border-radius: 6.1875rem;
`;

export const BlueBlur = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  width: 6.25rem;
  height: 6.25rem;
  background-color: rgba(0, 55, 255, 0.81);
  filter: blur(100px);
  border-radius: 99px;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 135%;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 4.8125rem;
  right: 1.25rem;
`;