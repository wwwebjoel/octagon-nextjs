'use client';

import { combineReducers, Reducer } from 'redux';
import headerReducer from './header';
import trapezoidReducer from './trapezoid'
import octagonReducer from './octagon'
import anchorReducer from './anchor'
import currentSelectionReducer from './currentSelection';

const rootReducer: Reducer = combineReducers({
  header: headerReducer,
  trapezoid: trapezoidReducer,
  octagon: octagonReducer,
  anchor: anchorReducer,
  currentSelection: currentSelectionReducer
});

export default rootReducer;
