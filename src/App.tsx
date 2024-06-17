import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme'
import GlobalStyle from './styles/global';
import BaseLayout from './layouts/base';
import BoardPage from './pages/BoardPage';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BaseLayout>
        <BoardPage />
      </BaseLayout>
    </ThemeProvider>
  )
}

export default App
