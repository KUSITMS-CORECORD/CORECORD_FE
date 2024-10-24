import styled from 'styled-components';

export const Input = styled.input`
  width: 20rem;
  padding: 0.75rem 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 0.875rem;
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.blue200};
  }
`;
