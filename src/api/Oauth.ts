const CLIENT_ID = import.meta.env.VITE_REST_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;
// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const KAKAO_AUTH_URL = `https://api.corecord.site/ouath2/authorization/kakao`;

import axios from 'axios';

// 액세스 토큰 요청 함수
export async function fetchAccessToken(code: string) {
  try {
    // 카카오의 OAuth 2.0 토큰 발급 엔드포인트로 POST 요청
    const response = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        code: code,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // 요청의 데이터 형식을 명시
        },
      }
    );

    // 서버로부터 받은 응답에서 액세스 토큰 추출
    const accessToken = response.data.access_token;
    console.log('Access Token:', accessToken);

    // 액세스 토큰을 로컬 스토리지에 저장 (나중에 API 요청 시 사용)
    localStorage.setItem('kakao_access_token', accessToken);

  } catch (error) {
    // 요청 실패 시 에러를 처리하는 부분
    console.error('Failed to fetch access token:', error);
  }
}