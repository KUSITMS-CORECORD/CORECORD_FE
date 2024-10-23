import { useEffect } from 'react';
import { fetchAccessToken } from '../../api/Oauth'; // 액세스 토큰 요청 함수 import
import { useLocation } from 'react-router-dom'; // URL에서 query string 추출을 위한 react-router hook
import { LoginButton } from '../../components/common/button/LoginButton'; // 로그인 버튼 import

export const OauthPage = () => {
  const location = useLocation();
  const code = new URLSearchParams(location.search).get('code'); // URL에서 'code' 추출

  useEffect(() => {
    if (code) {
      fetchAccessToken(code); // 액세스 토큰 요청
    }
  }, [code]);

  return (
    <div>
      <LoginButton />
    </div>
  );
};

