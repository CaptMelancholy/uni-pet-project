import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyle from './styles/global';
import BaseLayout from './layouts/base';
import BoardPage from './pages/BoardPage';
import SpacePage from './pages/SpacePage';
import DefaultRoutes from './Routes/Routes';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BaseLayout>
        <Routes>
          <Route path={DefaultRoutes.default}>
            <Route
              index
              element={
                <Navigate
                  to={DefaultRoutes.space}
                  replace
                />
              }
            />
            <Route
              path={DefaultRoutes.space}
              element={<SpacePage />}
            />
            <Route
              path={DefaultRoutes.board}
              element={<BoardPage />}
            />
          </Route>
        </Routes>
      </BaseLayout>
    </ThemeProvider>
  );
}

export default App;
