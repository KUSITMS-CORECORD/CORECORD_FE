import * as S from './ChipStyle';

interface ChipProps {
  children: React.ReactNode;
  color?: boolean;
  isBig?: boolean;
}

/**
 *
 * @param children - chip에 들어갈 글씨
 * @param color - (optional) true일 경우 노란색
 * @param isBig - (optinal) true일 경우 big size
 * @returns
 */
export const Chip = ({ children, color, isBig }: ChipProps) => {
  return (
    <S.Chip isBig={isBig} color={color}>
      {children}
    </S.Chip>
  );
};
