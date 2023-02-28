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
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
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
                <Route exact path="/win" element={ <MarketMaker />}>
                  <Route path="prediction" element={ <Prediction />} />
                  <Route path="tranding-competition" element={ <TradingCompetition />} />
                  <Route path="lottery" element={ <Lottery />} />
                  <Route path="pottery" element={ <Pottery />} />
                </Route>
              </Routes>
            </Layout1>
          </Layout>
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
