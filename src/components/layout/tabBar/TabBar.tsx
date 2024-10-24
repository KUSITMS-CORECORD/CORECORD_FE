import { useNavigate } from 'react-router-dom';
import * as S from './TabBarStyle';

interface TabBarProps {
  leftText?: string;
  rightText?: string;
  icon?: string;
  centerText?: string;
  onClick?: () => void;
}
/**
 *
 * @param leftText - (optional) 왼쪽 자리에 들어갈 글씨
 * @param rightText - (optional) 오른쪽 자리에 들어갈 글씨
 * @param icon - (optional) 아이콘
 * @param centerText - (optional) 가운데 자리에 들어갈 글씨
 * @param onClick - (optional) rightText나 icon을 클릭 시 수행하는 함수
 * @returns
 */
export const TabBar = ({ leftText, rightText, icon, centerText, onClick }: TabBarProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <S.TabBar>
      <S.Icon src="/icons/arrowIcon.svg" alt="이전버튼" onClick={handleClick} />
      {leftText && <S.LeftText>{leftText}</S.LeftText>}
      {centerText && <S.CenterText>{centerText}</S.CenterText>}
      {rightText && <S.Text onClick={onClick}>{rightText}</S.Text>}
      {icon && <S.Icon src={icon} alt="아이콘" onClick={onClick} />}
    </S.TabBar>
  );
};
