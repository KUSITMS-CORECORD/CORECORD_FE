import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Title = styled.h5`
  color: ${({ theme }) => theme.colors.gray900};
`;

export const Icon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

export const SheetContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 0.875rem;
  line-height: 145%;
`;