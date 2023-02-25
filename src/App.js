import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import { ThemeProvider } from '@mui/material'
import theme from './themes'
import { Layout } from './components'
import { MarketMaker } from './pages'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={ <MarketMaker />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
