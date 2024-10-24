import styled from 'styled-components';

export const CategoryChip = styled.div<{ isSelected: boolean }>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  border-radius: 6.1875rem;
  border: ${(props) => (props.isSelected ? 'none' : `1px solid ${props.theme.colors.gray50}`)};
  background-color: ${(props) => (props.isSelected ? props.theme.colors.gray700 : '#ffffff')};
  color: ${(props) => (props.isSelected ? props.theme.colors.white : props.theme.colors.gray500)};
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray700};
    border: none;
  }
`;
