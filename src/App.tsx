import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme'
import GlobalStyle from './styles/global';
import BaseLayout from './layouts/base';
import BoardPage from './pages/BoardPage';
import SpacePage from './pages/SpacePage';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BaseLayout>
        {/* <BoardPage /> */}
        <SpacePage />
      </BaseLayout>
    </ThemeProvider>
  )
}

export default App
