import { InputHTMLAttributes } from 'react';
import * as S from './InputStyle';

export const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <S.Input {...props} />;
};
