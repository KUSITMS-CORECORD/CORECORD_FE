import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/homePage/HomePage';
import { OauthPage } from './pages/oauthPage/OauthPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' replace />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'register',
        element: <OauthPage />
      }
    ]
  }
]);
