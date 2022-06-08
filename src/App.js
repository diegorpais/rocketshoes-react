import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header'
import RoutesComponent from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <RoutesComponent />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
