import * as S from './CategoryChipStyle';

interface CategoryChipProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

/**
 *
 * @param children - CategoryChip 안에 들어갈 글씨
 * @param isSelected - 선택된 chip의 색깔을 표시하는 값
 * @param onClick - 카테고리 선택과 관련된 함수
 * @returns
 */
export const CategoryChip = ({ children, isSelected, onClick }: CategoryChipProps) => {
  return (
    <S.CategoryChip isSelected={isSelected} onClick={onClick}>
      {children}
    </S.CategoryChip>
  );
};
