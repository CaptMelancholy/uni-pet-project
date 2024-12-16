import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyle from './styles/global';
import BaseLayout from './layouts/base';
import BoardPage from './pages/BoardPage';
import BoardsPage from './pages/BoardsPage';
import DefaultRoutes from './Routes/Routes';
import { generatePath, Navigate, Route, Routes } from 'react-router-dom';
import { ScreenProvider } from './context/ScreenContext';
import JoinPage from './pages/JoinPage';
import SuccessPage from './pages/SuccessPage';
import ErrorPage from './pages/ErrorPage';
import { AuthProvider } from './context/AuthContext';
import LogoutPage from './pages/LogoutPage';
import { UpdateProvider } from './context/UpdateContext';
import InvitePage from './pages/InvitePage';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AuthProvider>
        <UpdateProvider>
          <ScreenProvider>
            <GlobalStyle />
            <BaseLayout>
              <Routes>
                <Route
                  path='*'
                  element={
                    <Navigate
                      to={generatePath(DefaultRoutes.error, { code: '404' })}
                      replace
                    />
                  }
                />
                <Route path={DefaultRoutes.default}>
                  <Route
                    index
                    element={
                      <Navigate
                        to={DefaultRoutes.boards}
                        replace
                      />
                    }
                  />
                  <Route
                    path={DefaultRoutes.boards}
                    element={<BoardsPage />}
                  />
                  <Route
                    path={DefaultRoutes.success}
                    element={<SuccessPage />}
                  />
                  <Route
                    path={DefaultRoutes.board}
                    element={<BoardPage />}
                  />
                  <Route
                    path={DefaultRoutes.auth}
                    element={<JoinPage />}
                  />
                  <Route
                    path={DefaultRoutes.error}
                    element={<ErrorPage />}
                  />
                  <Route
                    path={DefaultRoutes.logout}
                    element={<LogoutPage />}
                  />
                  <Route
                    path={DefaultRoutes.invite}
                    element={<InvitePage />}
                  />
                </Route>
              </Routes>
            </BaseLayout>
          </ScreenProvider>
        </UpdateProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
