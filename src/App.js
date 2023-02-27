import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import { ThemeProvider } from '@mui/material'
import theme from './themes'
import { Layout } from './components'
import { MarketMaker,  } from './pages'
import { Prediction, TradingCompetition, Lottery, Pottery } from './pages'
import { Layout1 } from "./components/Layout1";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Layout1>
            <Routes>
              <Route exact path="/" element={ <MarketMaker />}>
                <Route path="prediction" element={ <Prediction />} />
                <Route path="tranding-competition" element={ <TradingCompetition />} />
                <Route path="lottery" element={ <Lottery />} />
                <Route path="pottery" element={ <Pottery />} />
              </Route>
            </Routes>
          </Layout1>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
