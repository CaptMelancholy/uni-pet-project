import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme'
import GlobalStyle from './styles/global';
import BaseLayout from './layouts/base';
import Card from './components/Card/Card';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BaseLayout>
        <Card />
      </BaseLayout>
    </ThemeProvider>
  )
}

export default App
