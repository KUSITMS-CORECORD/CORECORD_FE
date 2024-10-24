import styled from 'styled-components';

export const TabBar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.375rem;
  width: 100%;
  padding: 0rem 1.25rem;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const CenterText = styled.span`
  position: absolute;
  top: 1.1875rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  font-weight: 600;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const LeftText = styled.span`
  position: absolute;
  top: 1.1875rem;
  left: 4rem;
  ${Text}
`;
