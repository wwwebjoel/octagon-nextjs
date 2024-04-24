'use client';

import { combineReducers, Reducer } from 'redux';
import headerReducer from './header';
import trapezoidReducer from './trapezoid'

const rootReducer: Reducer = combineReducers({
  header: headerReducer,
  trapezoid: trapezoidReducer,
});

export default rootReducer;
