import styled from 'styled-components';
// import { ReactComponent as KakaoIcon } from '../../../../public/icons/kakao_wh.svg';
import { KAKAO_AUTH_URL } from '../../../api/Oauth';

const StyledButton = styled.a`
  display: flex; /* flexbox로 설정하여 아이콘과 텍스트가 수평으로 정렬되도록 함 */
  width: 318px;
  height: 53px;
  position: absolute;
  top: 505.5px;
  left: 20.83px;
  padding: 15.7px 19.63px;
  gap: 9.81px;
  border-radius: 11.78px 0px 0px 0px;
  text-decoration: none; /* 링크 스타일 제거 */
  opacity: 1; /* 버튼이 보이도록 수정 */

  /* 배경 색상 */
  background-color: rgba(255, 230, 0, 1); /* UIColor(red: 1, green: 0.9, blue: 0, alpha: 1) */
  
  /* 폰트 설정 */
  font-family: 'Pretendard', sans-serif;
  font-size: 13.74px;
  font-weight: 600;

  justify-content: center;
  align-items: center;

  img {
    margin-right: 10px; /* 아이콘과 텍스트 간의 간격 조정 */
  }
`;

export const LoginButton = () => {

  return (
    <StyledButton href={KAKAO_AUTH_URL}>
      {/* <KakaoIcon /> */}
      카카오로 로그인하기
    </StyledButton>
  );
};
