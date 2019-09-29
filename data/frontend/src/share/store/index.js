import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from '../reducers';

export const Store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));