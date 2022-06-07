import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import RoutesComponent from './routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
