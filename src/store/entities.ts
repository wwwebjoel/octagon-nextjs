'use client';

import { combineReducers, Reducer } from 'redux';
import headerReducer from './header';
import trapezoidReducer from './trapezoid'
import octagonReducer from './octagon'
import anchorReducer from './anchor'

const rootReducer: Reducer = combineReducers({
  header: headerReducer,
  trapezoid: trapezoidReducer,
  octagon: octagonReducer,
  anchor: anchorReducer
});

export default rootReducer;
