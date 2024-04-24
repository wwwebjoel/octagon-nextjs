'use client';

import { combineReducers, Reducer } from 'redux';
import headerReducer from './header';

const rootReducer: Reducer = combineReducers({
  header: headerReducer,
});

export default rootReducer;
