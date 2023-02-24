import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import { Layout } from './components'
import { MarketMaker } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={ <MarketMaker />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
