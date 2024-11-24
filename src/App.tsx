import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, matchPath } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { SideBarItem } from './components/common/sideBar/SideBarItem';
import * as S from './App.Style';

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideSideBarPath = ['/oauth', '/login', '/register', '/login-success', '/chat/:id', '/review-chat/:id']; // router 확정되면 추후 수정

  useEffect(() => {
    const unprotectedPaths = ['/oauth', '/login', '/register', '/login-success'];
    const accessToken = localStorage.getItem('nickname');

    if (!accessToken && !unprotectedPaths.includes(location.pathname)) {
      navigate('/oauth');
    }
  }, [location, navigate]);

  // hideSideBarPath에서 패턴 매칭 확인
  const showSidBar = !hideSideBarPath.some((path) =>
    matchPath(path, location.pathname)
  );

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <S.Container>
          {showSidBar && (
            <S.SideBar>
              <SideBarItem />
            </S.SideBar>
          )}
          <S.ContentWrapper>
            <Outlet />
          </S.ContentWrapper>
        </S.Container>
      </>
    </ThemeProvider>
  );
};

export default App;
