import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header'
import RoutesComponent from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesComponent />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
