/** configureStore */
import { createStore } from 'redux';

/** reducer */
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;